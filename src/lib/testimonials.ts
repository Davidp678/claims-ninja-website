export type ClientReview = {
  quote: string;
  author: string;
  location: string;
};

export const CLIENT_REVIEWS: readonly ClientReview[] = [
  {
    quote:
      "The team at Claims Ninja is genuinely a pleasure to work with, their team is very personable and the estimates are reasonable, providing a good starting point for our projects. And we really appreciate the straightforward approach!",
    author: "Steve Kranz",
    location: "Premiere Restoration",
  },
  {
    quote:
      "These guys don't just handle claims—they run them through a battle-tested, ultra-organized, performance-optimized system that makes our old PAs look like amateurs fumbling in the dark. From the moment they take on a claim, it's like watching a well-oiled machine go to work. Every file is tracked. Every update is clear. Every deadline is hit. No more second-guessing. No more chasing. Just results.",
    author: "Kenneth Valentine",
    location: "Absolute Home & Roof Solutions",
  },
  {
    quote:
      "We looked for months trying to find a reliable partner to manage our claims. So fortunate to have found a company that actually gets the job done.",
    author: "Daniel Deerwater",
    location: "Infinity Roofing",
  },
] as const;
