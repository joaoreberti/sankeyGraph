
let labels = []
let values = []

console.log(window.location)
fetch('http://joaoreberti.tech:3010/getValues')
.then((result => result.json())
).then(data => {
  
  
  data.map(item => {
    if(item.field === 'Applied'){
      labels.push(item.field)

    }else{
      labels.push(item.field)
  
      values.push(item.value)
      console.log('joao', labels);
      console.log('reberti',values)
    }
 

})})



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
    source: [0, 0, 0, 0, 0, 0, 0, 0 ],
    target: [1, 2, 3, 4, 5, 6, 7, 8 ],
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
)




console.log('joao', labels)
console.log('joao', values)


