import React from "react";

export default class CustomizedTooltip extends React.Component {
    render() {
          const { active } = this.props;

    if (active) {
      const { payload } = this.props;
      let doping=payload[1].payload.Doping || "No doping allegations";
      let name=payload[1].payload.Name;
      let nationality=payload[1].payload.Nationality;
      let year=payload[1].payload.Year;
      return (
        <div className="custom-tooltip">
          <p className="desc">{`${name} : ${nationality}`} Year:{year}</p>
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="intro">{doping}</p>
          
        </div>
      );
    }

    return null;
    }
}