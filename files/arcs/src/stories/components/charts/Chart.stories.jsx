import React from 'react';

import ChartComponent from './Chart';

export default {
    title: 'Charts/ Analytics Charts',
    component: 'ChartComponent'
}

const Template = (args) => <ChartComponent {...args} />

export const VerticalBar = Template.bind({});

VerticalBar.args = {
    type: 'vertical_bar',
    data: {
        labels: [ 'Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Member Count 2010',
          data: [65, 59, 80, 81, 56, 55, 40, 20, 35, 79, 45, 90],
          fill: true,
          backgroundColor: [
            '#9F7DE1',
            '#9F7DE1',
            '#9F7DE1',
            '#9F7DE1',
            '#9F7DE1',
            '#9F7DE1',
            '#9F7DE1'
          ],
          borderWidth: 1,
          barPercentage: 0.95,
          categoryPercentage: 0.95,
          maintainAspectRatio: false,
          stack: 'Stack 0' 
        }, {
          label: 'Member Count 2020',
          data: [65, 59, 80, 81, 56, 55, 40, 20, 35, 79, 45, 90],
          fill: true,
          backgroundColor: [
            '#CFD8DC',
            '#CFD8DC',
            '#CFD8DC',
            '#CFD8DC',
            '#CFD8DC',
            '#CFD8DC',
            '#CFD8DC'
          ],
          borderWidth: 1,
          barPercentage: 0.95,
          categoryPercentage: 0.95,
          maintainAspectRatio: false,
          stack: 'Stack 0'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position: 'bottom',
            }
        },
        scales: {
            x: {
                //controls grid, grid border, etc
                grid: {
                    display: false,
                    borderWidth: 0,
                },
                title: {
                    display: false,
                },
                // controls title/label of the x axis
                ticks: {
                    display: false,
                    color: 'red',
                    backdropColor: 'black'

                },

            },
            y: {
                //controls grid, grid border, etc
                grid: {
                    display: false,
                    borderWidth: 0
                },
                title: {
                    display: false
                },
                // controls title/label of the y axis
                ticks: {
                    display: false,
                    color: 'black'
                }
            },
        }
    }
}

export const HorizontalBar = Template.bind({});

HorizontalBar.args = {
    type: 'horizontal_bar',
    data: {
        labels: [ 'Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5', 'Location 6', 'Location 7'],
        datasets: [{
          label: 'Top Locations',
          data: [500, 480, 380, 281, 156, 55, 40],
          fill: false,
          backgroundColor: [
            '#1F135B',
            '#2A1979',
            '#341F97',
            '#5F27CD',
            '#9F7DE1',
            '#CFBEF0',
            '#D3DDE7'
          ],
          borderWidth: 1,
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          maintainAspectRatio: false
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position: 'bottom',
            }
        },
        scales: {
            x: {
                //controls grid, grid border, etc
                grid: {
                    display: false,
                    borderWidth: 0,
                },
                title: {
                    display: false,
                },
                // controls title/label of the x axis
                ticks: {
                    display: false,
                    color: 'red',
                    backdropColor: 'black'
    
                },
    
            },
            y: {
                //controls grid, grid border, etc
                grid: {
                    display: false,
                    borderWidth: 0
                },
                title: {
                    display: false
                },
                // controls title/label of the y axis
                ticks: {
                    display: false,
                    color: 'black'
                }
            },
        }
    }
}

export const Pie = Template.bind({});

Pie.args = {
    type: 'pie',
    data: {
        labels: ['Female', 'Male', 'Others'],
        datasets: [{
          label: 'Pie Chart',
          data: [400, 60, 250],
          backgroundColor: [
            '#5250B4',
            '#D3DDE7',
            '#CFBEF0'
          ],
          hoverOffset: 5,
          maintainAspectRatio: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                },
                position: 'bottom',
            }
        }
    }
}

export const Line = Template.bind({});

Line.args = {
    type: 'line',
    data: {
        labels: ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
        datasets: [{
            label: 'Line Chart',
            data: [1, 3, 5, 6, 2, 6, 3 ],
            fill: {
                target: 'origin',
                above: '#F1F1FF',
            },
            borderColor: '#5250B4',
            tension: 0.5,
            borderWidth: 1,
            maintainAspectRatio: false,
            backgroundColor: '#5250B4'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                },
                position: 'bottom',

            }
        },
        scales: {
            x: {
                //controls grid, grid border, etc
                grid: {
                    display: false,
                    borderWidth: 0,
                },
                title: {
                    display: false,
                },
                // controls title/label of the x axis
                ticks: {
                    display: false,
                    color: 'red',
                    backdropColor: 'black'

                },

            },
            y: {
                //controls grid, grid border, etc
                grid: {
                    display: false,
                    borderWidth: 0
                },
                title: {
                    display: false
                },
                // controls title/label of the y axis
                ticks: {
                    display: false,
                    color: 'black'
                }
            },

        },
    }
}

export const Doughnut = Template.bind({});

Doughnut.args = {
    type: 'doughnut',
    data: {
        labels: [
            'Sample',
        ],
        datasets: [{
            label: 'Sample',
            data: [60, 40],
            backgroundColor: [
            '#341F97',
            '#D3DDE7'
            ],
            hoverOffset: 3,
            borderWidth: [ 0, 0 ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Percentage',
                position: 'top',
            }
        }
    }
}