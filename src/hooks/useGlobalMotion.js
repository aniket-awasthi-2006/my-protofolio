import { useEffect } from 'react';

const MOTION_GROUPS = [
  { selector: 'section, footer', stagger: 90, maxDelay: 420 },
  {
    selector:
      '.section-header, .skill-group, .proj-imgbx, .experience-card, .certificate-card, .post-card, .contact-point, .newsletter-bx, .contact-shell, .contact-form-card, .contact-visual',
    stagger: 70,
    maxDelay: 420,
  },
  {
    selector:
      '.project .nav-link, .banner-btn, .navbar-text .vvd, .social-icon a, .experience-card__attachments-btn, .experience-attachments-controls button, .experience-attachments-thumbs button, .contact .contact-submit, .new-email-bx button',
    stagger: 45,
    maxDelay: 260,
  },
];

const VISIBLE_CLASS = 'motion-enter--visible';

export const useGlobalMotion = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new Set();
    const targets = [];

    MOTION_GROUPS.forEach(({ selector, stagger, maxDelay }) => {
      const nodes = document.querySelectorAll(selector);

      nodes.forEach((node, index) => {
        if (!(node instanceof HTMLElement) || seen.has(node)) {
          return;
        }

        seen.add(node);
        node.classList.add('motion-enter');
        node.style.setProperty('--motion-delay', `${Math.min(index * stagger, maxDelay)}ms`);
        targets.push(node);
      });
    });

    if (!targets.length) {
      return undefined;
    }

    const reveal = (element) => {
      element.classList.add(VISIBLE_CLASS);
    };

    if (reduceMotionQuery.matches || typeof IntersectionObserver === 'undefined') {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
};
