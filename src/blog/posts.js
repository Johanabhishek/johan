// Blog posts configuration
// To add a new blog post, simply add a new object to this array

export const blogPosts = [
  {
    id: "hidden-dangers-data-augmentation",
    title: "The Hidden Dangers of Data Augmentation: A Benchmark Story",
    date: "2025-08-08",
    excerpt: "A controlled experiment reveals that some popular data augmentation techniques can actually harm your model's performance. Here’s what happened when I put them to the test.",
    content: `
 So, Data Augmentation is Always a Good Idea, Right? I Decided to Check. 

Anyone who's spent time in machine learning has heard the advice: if you want a better model, get more data. And if you can't get more data, you should augment what you have. It’s become a standard part of the playbook, something I've always taken as a given.

But recently I started to wonder. Is it *always* a good idea? What if, for certain problems, these trusted techniques were actually making things worse? I got curious and decided to run a quick, honest experiment.

I set up a simple testbed. I took a standard time series dataset of household energy usage and built a basic LSTM model to predict high vs. low energy consumption. It worked okay, giving me a baseline accuracy of about 87.35%. This was my score to beat.

Then, I took the training data and created three new versions, each using a classic augmentation technique: Jittering (adding a bit of noise), Time Warping (stretching and squeezing the timeline), and Scaling (changing the magnitude).

Here’s where things got really interesting.

Adding a little noise (Jittering) gave me a small but real performance boost, just as you'd expect. But the other two, Time Warping and Scaling, actually made the model *worse*. Time Warping, in particular, dropped the accuracy by over a full percentage point.

My gut feeling is that for data with strong, cyclical patterns like energy usage, messing with the timeline or the magnitude is just too destructive. It breaks the very patterns the model is trying to learn. It's a classic case of the "cure" being worse than the disease.

This little experiment was a huge eye-opener for me. It proved that the common wisdom of just throwing augmentation at a problem is a risky, unpredictable game of trial-and-error. That's a massive waste of time and resources for anyone building AI.

And that’s the whole reason I'm starting my new project, which I'm calling Hermes. The goal is to build a tool that can intelligently figure out the best augmentation strategy for a given dataset, instead of just guessing. It's an ambitious idea, but this first experiment proves how necessary it is.

I'm just getting started, but you can follow my progress over at my GitHub. It's going to be a fun ride.
`
  }
{
    id: "hidden-dangers-data-augmentation",
    title: "One size fits none",
    date: "2025-08-10",
    excerpt: "A controlled experiment reveals that some popular data augmentation techniques can actually harm your model's performance. Here’s what happened when I put them to the test.",
    content: `
 One Size Fits None: I Tested Data Augmentation on 3 Diverse Datasets. Here's What I Found.
Posted: August 11, 2025

In my last post, I shared a surprising finding: for a standard time series dataset, some of the most popular data augmentation techniques actually hurt my model's performance. It was a clear sign that the common wisdom of "just add augmentation" is a risky game of trial-and-error.

But was that just a fluke? A quirk of one specific dataset? To be sure, I knew I had to scale up the experiment. I needed to move from a simple test to a rigorous, scientific benchmark to see if this problem was a universal one.

The Proving Grounds: Three Worlds of Data
To test for generalizability, I chose three datasets from completely different real-world domains, each with its own unique character:

Energy Data: Smooth and highly cyclical, showing daily patterns of household energy use.

Yahoo Server Metrics: Highly imbalanced, with rare anomaly events making up less than 0.4% of the data.

KPI Data: Sparse and volatile, characterized by sharp, sudden spikes in system performance metrics.

On top of that, I upgraded my evaluation process to the gold standard: 5-fold cross-validation. This ensures the results are stable, reliable, and not just a lucky roll of the dice.

The Experiment: The Hermes Gauntlet
I used my custom-built search tool, Hermes, to run an automated search for the best augmentation policy on each of the three datasets. The goal was to see if a "one-size-fits-all" strategy exists, or if each dataset would require its own unique solution.

The Overwhelming Evidence: The Villain is Real
The results were unambiguous and even more powerful than I expected. Here is the final summary of the best-performing policy found for each dataset after a random search:

Dataset

Best Policy Found

Score (Mean Accuracy)

Energy

baseline

83.03%

Yahoo

baseline

99.64%

KPI

permutation + jittering + time_warping

99.60%

(Note: The high accuracy on the Yahoo dataset is due to its extreme imbalance; even the baseline is very high.)

The key finding is stunning. For two of the three completely different datasets, the best strategy Hermes could find in a random search was to do nothing at all. For the third, it found a complex, non-obvious combination of three different techniques.

This is the most powerful evidence I could have asked for. It proves that the "Trial-and-Error Pipeline" is a fundamental and dangerous problem in data-centric AI. The optimal augmentation strategy is clearly, demonstrably data-dependent.

The Conclusion
This experiment moves my conviction from a hypothesis to a data-backed certainty. We cannot build robust and reliable AI systems if we are still guessing about how to prepare our data.

This is why the mission of Project Hermes—to build an intelligent tool that can find the right strategy for the right data, every time—is so critical. The next phase of my work will focus on moving beyond random search to more intelligent optimization algorithms.

The problem is real. The mission is clear. The build continues.

You can follow the project's development over at my GitHub: [Link to Your GitHub Repository Here]
`
  }
];

// Helper function to get a post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get all posts
export const getAllPosts = () => {
  return blogPosts;
};



