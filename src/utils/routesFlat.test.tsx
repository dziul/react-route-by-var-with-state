import React from "react";

import { RouteConfigProps } from "../types";

import routesFlat from "./routesFlat";

const ComponentFake: React.FC = () => <div />;

describe("Test function routesFlat", () => {
  it("should return a new array with all children flat", () => {
    const routes: RouteConfigProps[] = [
      {
        path: "/one",
        component: ComponentFake,
        children: [
          {
            path: "/two",
            component: ComponentFake,
            children: [
              {
                path: "/:id",
                component: ComponentFake
              }
            ]
          },
          { path: "/three", component: ComponentFake }
        ]
      }
    ];

    const routesShould: RouteConfigProps[] = [
      {
        path: "/one/two/:id",
        component: ComponentFake
      },
      {
        path: "/one/two",
        component: ComponentFake
      },
      { path: "/one/three", component: ComponentFake },
      {
        path: "/one",
        component: ComponentFake
      }
    ];

    expect(routesFlat(routes)).toEqual(routesShould);
  });
});
