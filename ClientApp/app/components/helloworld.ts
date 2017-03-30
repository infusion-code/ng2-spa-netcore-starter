import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `
        <div class="side-body">
            <h1>Hello World</h1>
            <div class="container-fluid">
                <div class="row">
                    To get started:
                </div>
                <ul class="row">
                    <li>Checkout the <a href="https://www.github.com/infusion-code/ng2-spa-netcore-starter/wiki">@infusion-code/ng2-spa-netcore-starter Wiki</a> for 
                    documentation and next steps with this template.</li>
                    <li>Also review the <a href="https://github.com/infusion-code/ng2-app-scaffold">ng2-app-scaffold</a> to understand how to create derived injectable services to deal with configuration, navigation, etc...</li>
                    <li>Last but not least checkout <a href="https://github.com/infusion-code/ng2-cards-and-tiles">ng2-cards-and-tiles</a> for available cards and tiles components to rapidly assemble functional apps. These are also used in the component for 
                    <a [routerLink]="['/nav1']">Nav Item 1</a>.</li>
                </ul>
                <div class="row">
                    If you want to see a fully built-out application, checkout the <a href="https://github.com/infusion-code/event-checkin">Infusion Eventbrite check-in and greeter app</a>.
                </div>
            </div>
        </div>
    `,
    styles:[`
        .row { margin-top: 15px; }
    `]
})
export class HelloWorldComponent{
}

