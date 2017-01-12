/* eslint-env jasmine */

export default function apiTest(field) {
  describe(field.info.type, () => {
    it("exposes the compulsory api", () => {
      expect(typeof field.info).toBe("object");
      expect(typeof field.initialState).toBe("function");
      expect(typeof field.RenderEditor).toBe("function");
    });

    it("complies with the info interface", () => {
      expect(typeof field.info.type).toBe("string");
      expect(typeof field.info.group).toBe("string");
      expect(typeof field.info.displayName).toBe("string");
    });

    it("initialState's function return contains type info", () => {
      const init = field.initialState();
      expect(typeof init.type).toBe("string");
      expect(typeof init.group).toBe("string");
      expect(typeof init.displayName).toBe("string");
    });

    it("initialState's function return contains instance compulsory fields", () => {
      const init = field.initialState();
      expect(typeof init.required).toBe("boolean");
      expect(typeof init.configShowing).toBe("boolean");
    });
  });
}
