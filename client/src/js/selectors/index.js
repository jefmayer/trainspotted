/* eslint-disable no-console, arrow-body-style */
import { createSelector } from 'reselect';
import weekdays from '../utils/Weekdays';
import { convertTimeToMinutesElapsed } from '../utils/DateUtils';


const getEntryData = state => state.entryData.items;
const getTrainlines = state => state.trainLines.items;

const groupAllEntriesByDayAndTime = createSelector(
  [getEntryData, getTrainlines],
  (entryData, trainLines) => {
    // Build list of all engines with entry keys, dates, colors
    const groups = [];
    entryData.map(entry => entry.engines.map(engine => groups.push({
      line: engine.line,
      day: new Date(entry.date).getDay(),
      time: `${Math.round(convertTimeToMinutesElapsed(entry.time) / 14.4)}%`,
      color: trainLines.find(line => engine.line === line.name).color,
    })));
    return groups
      .reduce((acc, current) => {
        const match = acc.find(entry => entry.day === current.day && entry.time === current.time);
        // If match is false, then return accumulator w/ match addeed
        if (!match) {
          return acc.concat([current]);
        }
        // If exists, then just return accumulator as is
        return acc;
      }, [])
      .map(groupItem => ({
        ...groupItem,
        values: groups
          .filter(entry => entry.day === groupItem.day && entry.time === groupItem.time)
          // Add number of engines w/ same line to property in each group item
          .map(entry => ({
            ...entry,
            occurance: `${groups.filter(g => entry.day === g.day && entry.time === g.time && g.line === entry.line).length / groups.filter(g => entry.day === g.day && entry.time === g.time).length * 100}%`,
          }))
          // Remove duplicate lines
          .reduce((acc, current) => {
            const match = acc.find(entry => entry.line === current.line);
            // If match is false, then return accumulator w/ match addeed
            if (!match) {
              return acc.concat([current]);
            }
            // If exists, then just return accumulator as is
            return acc;
          }, [])
          // Sort alphabetically
          .sort((a, b) => a.line.localeCompare(b.line)),
      }));
  },
);

const getResightings = createSelector(
  [getEntryData, getTrainlines],
  (entryData, trainLines) => {
    // Build list of all engines with entry keys, dates, colors
    const allEntryEngines = [];
    entryData.forEach(entry => entry.engines.forEach(engine => allEntryEngines.push({
      engine: `${trainLines.find(line => engine.line === line.name).short}, ${engine.number}`,
      line: engine.line,
      number: engine.number,
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
        // If match is false, then return accumulator w/ match added
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
          line: match.line,
          number: match.number,
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

const getInitialSightingMonthStart = createSelector(
  [getEntryData, getTrainlines],
  (entryData) => {
    const dates = [...entryData].sort((a, b) => new Date(a.date) - new Date(b.date));
    // Get 1st day of the start month
    const initial = new Date(dates[0].date);
    // return initial;
    return `${initial.getMonth() + 1}/1/${initial.getFullYear()}`;
  },
);

const getInitialSightingDate = createSelector(
  [getEntryData, getTrainlines],
  (entryData) => {
    const dates = [...entryData].sort((a, b) => new Date(a.date) - new Date(b.date));
    // Get 1st day of the start month
    const initial = new Date(dates[0].date);
    // return initial;
    return `${initial.getMonth() + 1}/${initial.getDate()}/${initial.getFullYear()}`;
  },
);

export {
  getInitialSightingDate,
  getInitialSightingMonthStart,
  getLinesByDayOfWeek,
  getLineWithMostSightings,
  getResightings,
  groupAllEntriesByDayAndTime,
};
/* eslint-enable no-console, arrow-body-style */
