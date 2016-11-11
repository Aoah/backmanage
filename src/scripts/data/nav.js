var store = {
    nav: [{
        title: "Data",
        href: 'collapseOne',
        lref: [
          {
             little:  "UI Features",
             ref:"home"
          },
          {
             little:  "Forms",
             ref:  "analytics",
          },{
             little:  "Tables",
             ref:'tasks',
          },{
              little:"Data",
              ref:"data({id:0})"
          }
        ]
    }, {
        title: "Features",
        href: 'tasks',
        lref: [
          {
             little:  "Notifications",
             ref:"data({id:0})"
          },
          {
             little:  "data",
             ref:  "data({id:1})",
          },{
             little:  "anytical",
             ref:'data({id:2})',
          },{
              little:"analytics",
              ref:"data({id:3})"
          }
        ]
    }, {
        title: "Notifications",
        href: 'collapseThree',

        lref: [
          {
             little:  "Notifications",
             ref:"home"
          },
          {
             little:  "data",
             ref:  "analytics",
          },{
             little:  "anytical",
             ref:'tasks',
          },{
              little:"analytics",
              ref:"data({id:3})"
          }
        ]

    }, {
        title: "Shoes",
        href: 'collapsethuo',

        lref: [
          {
             little:  "Notifications",
             ref:"home"
          },
          {
             little:  "data",
             ref:  "analytics",
          },{
             little:  "anytical",
             ref:'tasks',
          },{
              little:"analytics",
              ref:"data({id:3})"
          }
        ]
    }]
}
module.exports = store;
