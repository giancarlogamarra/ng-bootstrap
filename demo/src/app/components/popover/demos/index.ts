import {NgbdPopoverBasic} from './basic/popover-basic';
import {NgbdPopoverTplcontent} from './tplcontent/popover-tplcontent';
import {NgbdPopoverTriggers} from './triggers/popover-triggers';
import {NgbdPopoverVisibility} from './visibility/popover-visibility';
import {NgbdPopoverContainer} from './container/popover-container';
import {NgbdPopoverConfig} from './config/popover-config';

export const DEMO_DIRECTIVES = [
  NgbdPopoverBasic,
  NgbdPopoverTplcontent,
  NgbdPopoverTriggers,
  NgbdPopoverVisibility,
  NgbdPopoverContainer,
  NgbdPopoverConfig
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs?lang=typescript!./basic/popover-basic'),
    markup: require('!!prismjs?lang=markup!./basic/popover-basic.html')
  },
  tplcontent: {
    code: require('!!prismjs?lang=typescript!./tplcontent/popover-tplcontent'),
    markup: require('!!prismjs?lang=markup!./tplcontent/popover-tplcontent.html')
  },
  triggers: {
    code: require('!!prismjs?lang=typescript!./triggers/popover-triggers'),
    markup: require('!!prismjs?lang=markup!./triggers/popover-triggers.html')
  },
  visibility: {
    code: require('!!prismjs?lang=typescript!./visibility/popover-visibility'),
    markup: require('!!prismjs?lang=markup!./visibility/popover-visibility.html')
  },
  container: {
    code: require('!!prismjs?lang=typescript!./container/popover-container'),
    markup: require('!!prismjs?lang=markup!./container/popover-container.html')
  },
  config: {
    code: require('!!prismjs?lang=typescript!./config/popover-config'),
    markup: require('!!prismjs?lang=markup!./config/popover-config.html')
  }
};
