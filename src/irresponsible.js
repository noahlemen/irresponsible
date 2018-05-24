import React, { Component } from "react";

const irresponsible = (properties, StatelessComponent) => {
  return class StatefulComponent extends Component {
    constructor(props) {
      super(props);

      for (let key in properties) {
        if (typeof properties[key] === "function") {
          properties[key] = properties[key].bind(this);
        }
      }

      Object.assign(this, properties);
    }

    render() {
      return (
        <StatelessComponent
          {...this}
        />
      );
    }
  };
};

export default irresponsible;
