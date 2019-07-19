import React, { useEffect } from "react";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloContext } from "react-apollo/ApolloContext";

import { useQuery } from "@magento/peregrine/esm/hooks/useQuery";

const client = new ApolloClient({ uri: "https://countries.trevorblades.com" });

const QUERY = gql`
  query {
    countries {
      name
      code
    }
  }
`;

export default () => {
  return (
    <ApolloContext.Provider value={client}>
      <UseQueryExample query={QUERY} />
    </ApolloContext.Provider>
  );
};

const UseQueryExample = props => {
  const { query } = props;
  const [state, api] = useQuery(query);

  useEffect(() => {
    api.setLoading(true);
    api.runQuery({});
  }, [api]);

  return <CountryList state={state} />;
};

const CountryList = props => {
  const { state } = props;

  const { data, loading } = state;

  if (loading) {
    return <span>Loading...</span>;
  }
  if (data) {
    const countries = data.countries.map(country => {
      return (
        <li key={country.code}>
          {country.name} ({country.code})
        </li>
      );
    });

    return <ul>{countries}</ul>;
  }
  return null;
};
