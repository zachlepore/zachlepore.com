export const icon = (name) => {
  const paths = {
    ruler: '<path d="M5 19 19 5l3 3L8 22 5 19Z"/><path d="m15 9 2 2M12 12l2 2M9 15l2 2"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    brush: '<path d="m14 15 7-11-11 7M14 15c-1 5-4 6-8 5 3-1 1-5 5-6 1 0 2 0 3 1Z"/>',
    leaf: '<path d="M20 4C10 4 5 9 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z"/><path d="M5 21c2-6 6-10 11-13"/>',
    eye: '<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    arrow: '<path d="M3 12h17M15 7l5 5-5 5"/>',
    mountain: '<path d="m2 20 7-12 4 6 3-5 6 11H2Z"/><path d="m7 11 2 2 2-2"/>',
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
};
