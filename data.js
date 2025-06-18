const data = [
  {
    id: 1,
    question: "What is an accordion in web development?",
    answer:
      "An accordion is a UI component that allows users to expand and collapse sections of related content. It's useful for organizing information in a compact space."
  },
  {
    id: 2,
    question: "How does an accordion improve UX?",
    answer:
      "Accordions help reduce clutter by hiding non-essential content, allowing users to focus on the information they need without scrolling through long pages."
  },
  {
    id: 3,
    question: "Can multiple accordion panels be open at once?",
    answer:
      "Yes, depending on implementation. Some accordions allow multiple sections to be open, while others close the previously open section when a new one is clicked."
  },
  {
    id: 4,
    question: "Is accessibility important in accordion design?",
    answer:
      "Absolutely. A good accordion should be keyboard-navigable, have proper ARIA roles, and provide screen reader support for a fully inclusive experience."
  },
  {
    id: 5,
    question: "Where are accordions commonly used?",
    answer:
      "They are often used in FAQs, settings menus, filter panels on e-commerce sites, and anywhere content needs to be structured in collapsible sections."
  },
  {
    id: 6,
    question: "How do you create an accordion in React?",
    answer:
      "You can use state to track open/closed sections, conditional rendering for content, and event handlers to toggle visibility when headers are clicked."
  }
];

export default data;
