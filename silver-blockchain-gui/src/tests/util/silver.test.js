const silver = require('../../util/silver');

describe('silver', () => {
  it('converts number mojo to silver', () => {
    const result = silver.mojo_to_silver(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to silver', () => {
    const result = silver.mojo_to_silver('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to silver string', () => {
    const result = silver.mojo_to_silver_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to silver string', () => {
    const result = silver.mojo_to_silver_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number silver to mojo', () => {
    const result = silver.silver_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string silver to mojo', () => {
    const result = silver.silver_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = silver.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = silver.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = silver.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = silver.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = silver.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = silver.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
