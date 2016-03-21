


var dataSet = [
    {"sentence" : "I felt creative" , "agree" : 88, neutral: 8, disagree : 4},
    {"sentence" : "I felt an emotional reaction" , "agree" : 66, neutral: 22, disagree : 12},
    {"sentence" : "I learned something new about the text" , "agree" : 63, neutral: 24, disagree : 13},
    {"sentence" : "It confirmed my understanding of the text" , "agree" : 57, neutral: 33, disagree : 10},
    {"sentence" : "It jogged my memory" , "agree" : 50, neutral: 35, disagree : 15},
    {"sentence" : "The Wordle confused me" , "agree" : 5, neutral: 9, disagree : 86}
];

var width = 620,
    barHeight = 20;

var x = d3.scale.linear()
    .domain([0, 100])
    .range([0, width-200]);

$( document ).ready(function() {
    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * dataSet.length);

    var bar = chart.selectAll("g")
        .data(dataSet)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
    //agree
    bar.append("rect")
        .attr("class", "agree")
        .attr("width", function(d){return x(d.agree);})
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d.agree) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.agree; });

    //Neutral
    bar.append("rect")
        .attr("class", "neutral")
        .attr("width", function(d){return x(d.neutral);})
        .attr("x", function(d){return x(d.agree)})
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d.neutral) - 3 + x(d.agree); })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.neutral; });

    //Disagree
    bar.append("rect")
        .attr("class", "disagree")
        .attr("x" , function (d) {return x(d.neutral) + x(d.agree) })
        .attr("width", function(d){return x(d.disagree);})
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d.disagree) + x(d.neutral) + x(d.agree) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.disagree; });

    //Sentence

    bar.append("text")
        .attr("x", function(d) { return x(d.disagree) + x(d.neutral) + x(d.agree) + 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .attr("class" , "sentence")
        .text(function(d) { return d.sentence; });
});


