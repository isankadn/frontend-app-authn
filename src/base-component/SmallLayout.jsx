import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = ({ intl }) => (
  <span className="bg-primary-400 w-100">
    <div className="col-md-12 small-screen-top-stripe" />
    <div>
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image className="logo-small" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
      </Hyperlink>
      <div className="d-flex align-items-center mb-3 mt-3 mr-3">
        <div className={classNames({ 'small-yellow-line mr-n2.5': getConfig().SITE_NAME === 'edX' })} />
        <div className="d-flex flex-column text-center">
            <div
              className={classNames(
                'display-1 text-white mw-xs mb-2',
                { 'ml-6': getConfig().SITE_NAME !== 'edX' },
              )}
            >
              {intl.formatMessage(messages['start.learning'])}
            </div>
            <div className="text-accent-a mw-xs ml-6 mb-4 h1">
              {intl.formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
            </div>
            <div className="text-white mw-xs ml-6 mb-4 font-weight-bold">
            {intl.formatMessage(messages['start.learning.after.site.name'])}          
            </div>
          </div>
      </div>
    </div>
  </span>
);

SmallLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SmallLayout);
