export const sources = [
    {
      filename: 'view-schduler.component.ts',
      contents: {
        raw: require('!!raw-loader!./view-schduler.component'),
        highlighted: require('!!raw-loader!highlightjs-loader?lang=typescript!./component'),
      },
    },
    {
      filename: 'view-schduler.component.html',
      contents: {
        raw: require('!!raw-loader!./view-schduler.component.html'),
        highlighted: require('!!raw-loader!highlightjs-loader?lang=xml!./template.html'),
      },
    },
    {
      filename: 'module.ts',
      contents: {
        raw: require('!!raw-loader!./scheduler.module'),
        highlighted: require('!!raw-loader!highlightjs-loader?lang=typescript!./scheduler.module'),
      },
    },
  ];
  