import { Component } from '@angular/core';

@Component({
    selector: 'cards-tiles',
    template: `
        <div class="side-body">
            <actiontilebar></actiontilebar>
            <div class="row  no-margin-bottom">
                <featuretilebar></featuretilebar>
                <messageboard></messageboard>
            </div>
        </div>
    `,
    styles:[`
        .row { margin-top: 15px; }
    `]
})
export class CardsAndTilesComponent{
}

