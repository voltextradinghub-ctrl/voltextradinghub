import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import Text from '@/components/shared_ui/text';
import { useStore } from '@/hooks/useStore';
import { localize } from '@deriv-com/translations';
import { useDevice } from '@deriv-com/ui';
import OnboardTourHandler from '../tutorials/dbot-tours/onboarding-tour';
import Announcements from './announcements';
import Cards from './cards';
import InfoPanel from './info-panel';
import React from 'react';
import React from 'react';

const FreeBots = () => {
    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '8px' }}>🤖 Free Trading Bots</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>Select a pre-built automated bot to run instantly on your connected Deriv account.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {/* Bot Card 1 */}
                <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginTop: 0, color: '#ff4444' }}>🚀 Volatility 100 Rise/Fall</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>Automatically buys Rise contracts when a 3-tick uptrend is detected on Volatility 100 Index.</p>
                    <button style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', marginTop: '12px' }}>Run Bot</button>
                </div>

                {/* Bot Card 2 */}
                <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginTop: 0, color: '#2196F3' }}>🔢 Digit Even/Odd Bot</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>Analyzes the last digit of market ticks and trades automatically based on repeating patterns.</p>
                    <button style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', marginTop: '12px' }}>Run Bot</button>
                </div>
            </div>
        </div>
    );
};

export default BotStore
const BotStore = () => {
    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '8px' }}>🤖 Free Trading Bots</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>Select a pre-built automated bot to run instantly on your connected Deriv account.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {/* Bot Card 1 */}
                <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginTop: 0, color: '#ff4444' }}>🚀 Volatility 100 Rise/Fall</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>Automatically buys Rise contracts when a 3-tick uptrend is detected on Volatility 100 Index.</p>
                    <button style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', marginTop: '12px' }}>Run Bot</button>
                </div>

                {/* Bot Card 2 */}
                <div style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginTop: 0, color: '#2196F3' }}>🔢 Digit Even/Odd Bot</h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>Analyzes the last digit of market ticks and trades automatically based on repeating patterns.</p>
                    <button style={{ backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', width: '100%', fontWeight: 'bold', marginTop: '12px' }}>Run Bot</button>
                </div>
            </div>
        </div>
    );
};

export default FreeBots;

type TMobileIconGuide = {
    handleTabChange: (active_number: number) => void;
};

const DashboardComponent = observer(({ handleTabChange }: TMobileIconGuide) => {
    const { load_modal, dashboard, client, google_drive } = useStore();
    const { dashboard_strategies } = load_modal;
    const { is_google_drive_configured } = google_drive;
    const { active_tab, active_tour } = dashboard;
    const has_dashboard_strategies = !!dashboard_strategies?.length;
    const { isDesktop, isTablet } = useDevice();

    return (
        <React.Fragment>
            <div
                className={classNames('tab__dashboard', {
                    'tab__dashboard--tour-active': active_tour,
                })}
            >
                <div className='tab__dashboard__content'>
                    {client.is_logged_in && (
                        <Announcements is_mobile={!isDesktop} is_tablet={isTablet} handleTabChange={handleTabChange} />
                    )}
                    <div className='quick-panel'>
                        <div
                            className={classNames('tab__dashboard__header', {
                                'tab__dashboard__header--listed': isDesktop && has_dashboard_strategies,
                            })}
                        >
                            {!has_dashboard_strategies && (
                                <Text
                                    className='title'
                                    as='h2'
                                    color='prominent'
                                    size={isDesktop ? 'sm' : 's'}
                                    lineHeight='xxl'
                                    weight='bold'
                                >
                                    {localize('Load or build your bot')}
                                </Text>
                            )}
                            <Text
                                as='p'
                                color='prominent'
                                lineHeight='s'
                                size={isDesktop ? 's' : 'xxs'}
                                className={classNames('subtitle', { 'subtitle__has-list': has_dashboard_strategies })}
                            >
                                {is_google_drive_configured
                                    ? localize(
                                          'Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy.'
                                      )
                                    : localize(
                                          'Import a bot from your computer, build it from scratch, or start with a quick strategy.'
                                      )}
                            </Text>
                        </div>
                        <Cards has_dashboard_strategies={has_dashboard_strategies} is_mobile={!isDesktop} />
                    </div>
                </div>
            </div>
            <InfoPanel />
            {active_tab === 0 && <OnboardTourHandler is_mobile={!isDesktop} />}
        </React.Fragment>
    );
});

export default DashboardComponent;
