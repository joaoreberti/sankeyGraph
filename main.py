import plotly.graph_objects as go

fig = go.Figure(data=[go.Sankey(
    node = dict(
      pad = 15,
      thickness = 20,
      line = dict(color = "black", width = 0.5),
      label = ["Applied", "No reply", "Rejected", "1st round", "2sn round", "3rd round", "4th round", "5th round", "Offer"],
      color = ["blue", "red", "green"]
    ),
    link = dict(
      source = [0,0, 0,0,0,0,0 ], # indices correspond to labels, eg A1, A2, A2, B1, ...
      target = [1,2, 3, 4,5,6,7],
      value = [15,2, 1, 5, 2,2,2,2]
  ))])

fig.update_layout(title_text="Job Seeking Process", font_size=10)
fig.show()