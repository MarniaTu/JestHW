const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("books names test suite", () => {

  it("books names without sorting", () => {

      const input = [ //входные данные
          "Вечера",
          "Вечера",
          "Вечера"
          
      ];

      const expected = [ // ожидаемые данные на выходе
          "Вечера",
          "Вечера",
          "Вечера"
      ];

      const output = sorting.sortByName(input); // актуальные данные на выходе

      expect(output).toEqual(expected);


  });
});

describe("books names test suite", () => {

  it("Throws exception if test without params", () => {

      expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});
