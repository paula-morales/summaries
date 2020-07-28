import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryCard from "../Component/SummaryCard";

export default function Homepage() {
  const [summaries, setSummaries] = useState("");
  const [search, setSearch] = useState("");

  async function getData() {
    try {
      const data = await axios.get(
        "https://staging.onlineslagen.nl/api/summaries"
      );
      setSummaries(data.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  let summariesToDisplay;
  if (search && summaries) {
    summariesToDisplay = summaries.filter((summary) =>
      summary.theory.title.toLowerCase().includes(search)
    );
  } else if (!search && summaries) {
    summariesToDisplay = summaries;
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {summariesToDisplay
        ? summariesToDisplay.map((summary) => {
            const { theory } = summary;
            return (
              <SummaryCard
                id={theory.id}
                title={theory.title}
                text={theory.text}
              />
            );
          })
        : "Loading"}
    </div>
  );
}
