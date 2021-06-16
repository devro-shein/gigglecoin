const cryptoHash = require("./crypto-hash");
describe("cryptoHash()", () => {
  it("generates a SHA-256 hashed output", () => {
    expect(cryptoHash("hello world")).toEqual(
      "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9"
    );
  });

  it('produces the same hash with the same input arguments inany order',()=>{
    expect(cryptoHash('one','two','three'))
    .toEqual(cryptoHash('three','one','two'));
  })
});
