import React from 'react';

export const App = () => {
  return (
    <div>
      <h1>
        Hi react app - {process.env.NODE_ENV} {process.env.name}
      </h1>
    </div>
  );
};

export default App;
