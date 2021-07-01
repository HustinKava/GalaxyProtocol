import React from 'react';
import { Container } from '@material-ui/core';

function OpeningMessage() {
    return (
        <Container maxwidth='md'>
            <div className="openingCenter">
            <span className="openingHeader">Attention beloved community!</span>
            <br />
            <p className='openingText'>
                We are currently undergoing a migration from SafeGalaxy to The Galaxy
                Protocol. This will include an exchange of <b>SAFEGALAXY</b> tokens to the
                new <b>GALAXIA</b> tokens. The exchange of <b>SAFEGALAXY</b> tokens to{' '}
                <b>GALAXIA</b> tokens will take place between July 24th - 27th. You will
                have to <b>MANUALLY</b> take part in the migration. If you do not take
                part in the migration your SafeGalaxy investment value will be <b>LOST</b>
                . For more information please check out the <b>MIGRATION DOCUMENTATION</b>
                . <br />
                Thanks and much love &hearts;
            </p>
            </div>
        </Container>
    )
}

export default OpeningMessage
