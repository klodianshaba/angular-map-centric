import * as fromMap from './map.actions';

describe('mapsMaps', () => {
  it('should return an action', () => {
    expect(fromMap.mapsMaps().type).toBe('[Map] Maps Maps');
  });
});
