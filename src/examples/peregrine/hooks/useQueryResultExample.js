import React, { useEffect } from "react";

import { useQueryResult } from "@magento/peregrine/esm/hooks/useQueryResult";

// This example uses a mock REST endpoint that returns JSON data
const REST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

// This is a helper component that consumes data from the query state
// and returns a list of post titles
const PostsList = props => {
  const { data, isLoading } = props;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  let items = [];

  if (data) {
    items = data.map(item => {
      return <li key={item.id}>{item.title}</li>;
    });
  }

  return <ul>{items}</ul>;
};

export default () => {
  // Get the state and api object from the custom hook
  const [state, api] = useQueryResult();

  // Run the query when the component renders and use the api to update the
  // state with the resulting data
  useEffect(() => {
    api.setLoading(true);
    const request = new Request(REST_ENDPOINT);

    fetch(request)
      .then(response => {
        return response.json();
      })
      .then(json => {
        api.receiveResponse({ data: json });
      });
  }, [api]);

  return <PostsList data={state.data} loading={state.loading} />;
};
