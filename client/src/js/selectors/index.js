/* eslint-disable no-console */
import { createSelector } from 'reselect';

const getEntryData = state => state.entryData.items;
const getTrainlines = state => state.trainLines.items;

export const getResightings = createSelector(
  [getEntryData, getTrainlines],
  (entryData, trainLines) => {
    // Build list of all engines with entry keys, dates, colors
    const allEntryEngines = [];
    entryData.forEach(entry => entry.engines.forEach(engine => allEntryEngines.push({
      engine: `${trainLines.find(line => engine.line === line.name).short}, ${engine.number}`,
      entryId: entry._id, /* eslint-disable-line no-underscore-dangle */
      date: entry.date,
      color: trainLines.find(line => engine.line === line.name).color,
    })));
    // Find all engines seen more than once
    const duplicates = new Set();
    const resightings = allEntryEngines
      .filter(entry => duplicates.size === duplicates.add(entry.engine).size)
      // But there can be more than 2 matches... so now need to remove duplicates
      .reduce((acc, current) => {
        const match = acc.find(entry => entry.engine === current.engine);
        // If match is false, then return accumulator w/ match addee
        if (!match) {
          return acc.concat([current]);
        }
        // If exists, then just return accumulator as is
        return acc;
      }, [])
      .map((match) => {
        // Find all sighting dates
        const dates = allEntryEngines
          .filter(entry => match.engine === entry.engine)
          .map(entry => entry.date)
          .sort((a, b) => new Date(a) - new Date(b));
        return {
          engine: match.engine,
          dates,
          entryId: match.entryId,
          color: match.color,
        };
      })
      .sort((a, b) => new Date(a.dates[0]) - new Date(b.dates[0]));
    return resightings;
  },
);

export default getResightings;
/* eslint-enable no-console */
