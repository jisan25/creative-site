import { useEffect, useState } from "react";
import FAQS from "./FAQS";

const Search = () => {
  const [dbFaqs, setDbFaqs] = useState([]);
  const [dbHighFaqs, setDbHighFaqs] = useState([]);
  const [faqList, setFaqList] = useState([]);
  const [faq, setFaq] = useState("");
  const [categories, setCategories] = useState();
  const [searchHints, setSearchHints] = useState();
  const [loading, setLoading] = useState(false);

  const handleCategoryFaq = (e, item) => {
    const allCategories = document.querySelectorAll(".faq-category-item");
    allCategories.forEach((category) => {
      category.classList.remove("active");
    });
    e.target.classList.add("active");
    if (item === "All") {
      setFaqList(dbHighFaqs);
    } else {
      const categoryFaqList = dbFaqs.filter((faq) => faq.category == item);
      setFaqList(categoryFaqList);
    }
  };

  const handleSearch = (val) => {
    document.querySelector(".search-hints").classList.remove("d-none");
    const searchHints = dbFaqs.filter((faq) =>
      faq.title.toLowerCase().includes(val.toLowerCase())
    );
    if (searchHints.length > 0) {
      setSearchHints(searchHints);
    } else {
      const notFound = [
        {
          title: "Not Found. Please search with another keyword",
        },
      ];
      setSearchHints(notFound);
    }
    if (!val) {
      document.querySelector(".search-hints").classList.add("d-none");
      setFaqList(dbHighFaqs);
    }
  };

  const handleSearchClick = (search) => {
    if (search) {
      document.querySelector(".search-hints").classList.add("d-none");
      const searchedFaqs = dbFaqs.filter(
        (item) => item.title.toLowerCase() === search.toLowerCase()
      );
      setFaq(search);
      setFaqList(searchedFaqs);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://crm.creativesoftware.com.bd/api/faq-list"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { faq_list } = await response.json();
        setDbFaqs(faq_list);
        const highPrioriotyFaqList = faq_list.filter(
          (faq) => faq.priority === "High"
        );
        setDbHighFaqs(highPrioriotyFaqList);
        const uniqueCategories = faq_list.reduce((acc, item) => {
          if (!acc.includes(item.category)) {
            acc.push(item.category);
          }
          return acc;
        }, []);
        uniqueCategories.unshift("All");
        setFaqList(highPrioriotyFaqList);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <>
      <section className="faq-search d-flex flex-column justify-content-center text-white">
        <div className="faq-dash"></div>
        <h2 className="text-center h2 mb-4 font-bold">How Can We Help You?</h2>
        <div className="faq-search-container mb-5">
          <form>
            <input
              type="text"
              className="faq-search-input"
              name="search"
              placeholder="Type keywords to find answer"
              onChange={(e) => {
                setFaq(e.target.value);
                handleSearch(e.target.value);
              }}
              value={faq}
            />
            <button
              type="button"
              className="faq-search-button"
              onClick={() => {
                setFaq("");
                handleSearch("");
              }}
            >
              <i className="bi bi-x"></i>
            </button>
          </form>
          <div className="search-hints d-none">
            <ul>
              {searchHints &&
                searchHints.map((item) => (
                  <li>
                    <a onClick={() => handleSearchClick(item.title)}>
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="d-flex faq-category justify-content-center gap-3">
          {categories ? (
            categories.map((item) => (
              <span
                className="faq-category-item"
                onClick={(e) => handleCategoryFaq(e, item)}
              >
                {item}
              </span>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </section>
      <FAQS faqList={faqList} />

      {}
    </>
  );
};

export default Search;
