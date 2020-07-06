
let labels = []
let values = []
fetch(window.location.host+"getValues")
.then((result => result.json())
).then(data => data.map(item => {
  labels.push(item.field)
  values.push(item.value)


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
     label: labels,
     color: ["blue", "blue", "blue", "blue", "blue", "blue"]
    },
  
    link: {
      source: [0,0, 0,0,0,0,0,0 ],
      target: [1,2, 3, 4,5,6,7,8],
      value:  values
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
}))




console.log('joao', labels)
console.log('joao', values)


