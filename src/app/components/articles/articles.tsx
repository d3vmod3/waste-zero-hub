"use client";
import React from "react";

interface Article {
  title: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "How Our Trash Impacts the Environment - EarthDay.org",
    url: "https://www.earthday.org/how-our-trash-impacts-the-environment/",
  },
  {
    title:
      "Plastic Pollution is Changing Entire Earth System, Scientists Find - The Guardian",
    url: "https://www.theguardian.com/environment/2024/nov/07/plastic-pollution-is-changing-entire-earth-system-scientists-find",
  },
  {
    title: "Quantifying Methane Emissions from Landfilled Food Waste - EPA",
    url: "https://www.epa.gov/land-research/quantifying-methane-emissions-landfilled-food-waste",
  },
  {
    title: "Students' Awareness of Waste Management Practices - ResearchGate",
    url: "https://www.researchgate.net",
  },
  {
    title: "The Impact of Improper Waste Disposal on Ecosystems - ResearchGate",
    url: "https://www.researchgate.net/publication/38605365",
  },
  {
    title: "Health Impacts of Waste - PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/15027831/",
  },
  {
    title: "Uneaten Food Responsible for 14% of U.S. Methane Emissions - ReFED",
    url: "https://refed.org/articles/uneaten-food-is-responsible-for-14-percent-of-u-s-methane-emissions-according-to-new-refed-study/",
  },
  {
    title: "How Microplastics Get Into the Food Chain - World Economic Forum",
    url: "https://www.weforum.org/stories/2025/02/how-microplastics-get-into-the-food-chain/",
  },
  {
    title: "Waste Management Research - ScienceDirect",
    url: "https://www.sciencedirect.com/science/article/pii/S2772397624000042",
  },
  {
    title: "The World Has a Waste Problem - IFC",
    url: "https://www.ifc.org/en/blogs/2024/the-world-has-a-waste-problem",
  },
];

const Articles = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white block"
          >
            <h3 className="font-semibold text-sm truncate">{article.title}</h3>
            <span className="text-xs text-gray-500">Click to read</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Articles;
