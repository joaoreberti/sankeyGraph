var data = {
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 30,
      line: {
        color: "black",
        width: 0.5
      },
     label: ["Applied", "No reply", "Rejected", "1st round", "2sn round", "3rd round", "4th round", "5th round", "Offer"],
     color: ["blue", "blue", "blue", "blue", "blue", "blue"]
        },
  
    link: {
      source: [0,0, 0,0,0,0,0,0 ],
      target: [1,2, 3, 4,5,6,7,8],
      value:  [15,2, 1, 5, 2,2,2,1]
    }
  }
  
  var data = [data]
  
  var layout = {
    title: "Basic Sankey",
    font: {
      size: 10
    }
  }
  
  Plotly.react('myDiv', data, layout)
  