/* eslint-disable no-console, arrow-body-style */
import { createSelector } from 'reselect';
import weekdays from '../utils/Weekdays';

const getEntryData = state => state.entryData.items;
const getTrainlines = state => state.trainLines.items;

const getAllEntriesWithDayAndTime = createSelector(
  [getEntryData, getTrainlines],
  (entryData, trainLines) => {
    console.log(trainLines);
    // Build list of all engines with entry keys, dates, colors
    const arr = [];
    entryData.forEach(entry => entry.engines.forEach(engine => arr.push({
      engine: `${trainLines.find(line => engine.line === line.name).short}, ${engine.number}`,
      entryId: entry._id, /* eslint-disable-line no-underscore-dangle */
      // date: entry.date,
      day: new Date(entry.date).getDay(),
      time: entry.time,
      color: trainLines.find(line => engine.line === line.name).color,
      offset: trainLines.findIndex(line => engine.line === line.name),
    })));
    return arr;
  },
);

const getResightings = createSelector(
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
          .map(entry => ({ date: entry.date, entryId: entry.entryId }))
          .sort((a, b) => new Date(a.date) - new Date(b.date));
        return {
          engine: match.engine,
          dates,
          entryId: match.entryId,
          color: match.color,
        };
      })
      .sort((a, b) => new Date(a.dates[0].date) - new Date(b.dates[0].date));
    return resightings;
  },
);

const getLineWithMostSightings = createSelector(
  [getEntryData, getTrainlines],
  (entryData, trainLines) => {
    return trainLines
      .map(line => ({
        name: line.name,
        value: entryData.reduce((a, b) => (a + b.engines.filter(engine => engine.line === line.name).length), 0),
      }))
      .sort((a, b) => b.value - a.value)[0];
  },
);

const getLinesByDayOfWeek = createSelector(
  [getEntryData, getTrainlines],
  (entryData, trainLines) => {
    return trainLines
      .map(line => ({
        name: line.name,
        days: weekdays
          .map(day => ({
            full: day.full,
            short: day.short,
            index: day.index,
            value: entryData.reduce((a, b) => (a + b.engines.filter(engine => engine.line === line.name && new Date(b.date).getDay() === day.index).length), 0),
          })),
      }));
  },
);

export {
  getAllEntriesWithDayAndTime,
  getLinesByDayOfWeek,
  getLineWithMostSightings,
  getResightings,
};
/* eslint-enable no-console, arrow-body-style */
