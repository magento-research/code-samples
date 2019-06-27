import React, { useState } from "react";

import { useSearchParam } from "@magento/peregrine/esm/hooks/useSearchParam";

export default () => {
  const [queryParam, setQueryParam] = useState("");

  useSearchParam({ parameter: "query", setValue: setQueryParam });

  return (
    <>
      <form>
        <span>Set a query parameter: </span>
        <input type="text" name="query" autoComplete="off" />
      </form>
      <p>
        The current value for the <code>query</code> parameter is: {queryParam}
      </p>
    </>
  );
};
