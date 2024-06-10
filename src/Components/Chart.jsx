import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official"
import HightCharts3D from "highcharts/highcharts-3d"

HightCharts3D(Highcharts)
const Chart = () => {
    const [alpha, setAlpha] = useState(25);
    const [beta, setBeta] = useState(-30);

    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'transperent',
            options3d: {
                enabled: true,
                alpha: alpha,
                beta: beta,
                viewDistance: 25
            },
            style: {
                width: '100%',
            },
            events: {
                render() {
                    // Define shadow filter
                    this.renderer.definition({
                        tagName: 'filter',
                        id: 'shadow',
                        opacity: 0.5,
                        children: [{
                            tagName: 'feGaussianBlur',
                            in: 'SourceAlpha',
                            stdDeviation: 5
                        }, {
                            tagName: 'feOffset',
                            dx: 5,
                            dy: 5,
                            result: 'offsetblur'
                        }, {
                            tagName: 'feFlood',
                            'flood-color': 'rgba(0,0,0,0.5)'
                        }, {
                            tagName: 'feComposite',
                            in2: 'offsetblur',
                            operator: 'in'
                        }, {
                            tagName: 'feMerge',
                            children: [{
                                tagName: 'feMergeNode'
                            }, {
                                tagName: 'feMergeNode',
                                in: 'SourceGraphic'
                            }]
                        }]
                    });

                    this.series.forEach(series => {
                        series.group.attr({
                            filter: 'url(#shadow)'
                        });
                    });
                }
            }
        },
        title: {
            text: '',
            style: {
                color: '#ffffff' // White title text for contrast
            }
        },
        plotOptions: {
            pie: {
                depth: 55,
                innerSize: '60%', // Creates the doughnut shape
                dataLabels: {
                    enabled: true,
                    style: {
                        color: '#ffffff', // White data labels for contrast
                        textOutline: 'none'
                    }
                }
            }
        },
        series: [
            {
                type: "pie",
                data: [
                    {
                        name: "Community 60%",
                        y: 60,
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
                            stops: [
                                [0, '#fb73b5'],
                                [1, '#9c3790']
                            ]
                        }
                    },
                    {
                        name: "Investors 10%",
                        y: 10,
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
                            stops: [
                                [0, '#5dade2'],
                                [1, '#a9cce3']
                            ]
                        }
                    },
                    {
                        name: "Founder Team 10%",
                        y: 10,
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
                            stops: [
                                [0, '#f4d03f'],
                                [1, '#f9e79f']
                            ]
                        }
                    },
                    {
                        name: "Treasury 15%",
                        y: 25,
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
                            stops: [
                                [0, '#1abc9c'],
                                [1, '#a2d9ce']
                            ]
                        }
                    },
                    {
                        name: "Advisors 5%",
                        y: 5,
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1 },
                            stops: [
                                [0, '#e74c3c'],
                                [1, '#f1948a']
                            ]
                        }
                    },
                ]
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    plotOptions: {
                        pie: {
                            depth: 30,
                            innerSize: '50%',
                            dataLabels: {
                                style: {
                                    fontSize: '10px'
                                }
                            }
                        }
                    }
                }
            }, {
                condition: {
                    minWidth: 501
                },
                chartOptions: {
                    plotOptions: {
                        pie: {
                            depth: 55,
                            innerSize: '60%',
                            dataLabels: {
                                style: {
                                    fontSize: '12px'
                                }
                            }
                        }
                    }
                }
            }]
        }
    };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default Chart
