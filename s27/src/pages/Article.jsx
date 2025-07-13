import { useState } from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Article = () => {
  const params = useParams();
  const location = useLocation();

  console.log(location);

  const queries = new URLSearchParams(location.search);
  console.log(queries.get("foo"));

  const [article, setArticle] = useState({});
  const fetchArticle = (id) => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&pageids=${id}&prop=extracts|revisions&exintro=1&explaintext=1&rvprop=timestamp&origin=*`
    )
      .then((response) => response.json())
      .then((result) => {
        setArticle(result.query.pages[id]);
      });
  };

  useEffect(() => {
    fetchArticle(params.id);
  }, [params.id]);

  console.log(dayjs().format("HH:mm"));
  console.log(new Date().getDay());

  return (
    <div>
      <div>Article Page {params.id}</div>
      {article && (
        <article>
          <h1>{article.title}</h1>
          {article.revisions?.length && (
            <small>
              last modified at{" "}
              {dayjs(
                article.revisions[article.revisions.length - 1].timestamp
              ).format("YYYY MMMM DD")}
              (
              {dayjs(
                article.revisions[article.revisions.length - 1].timestamp
              ).fromNow()}
              )
            </small>
          )}
          <hr />
          <p>{article.extract}</p>
        </article>
      )}
    </div>
  );
};

export default Article;
