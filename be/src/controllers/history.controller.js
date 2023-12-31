// controllers/history.controller.js

const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { historyService } = require('../services');

const createHistory = catchAsync(async (req, res) => {
  const historyData = {
    ...req.body,
    status: 'active', // Set default status or update as needed
    orderdate: new Date().toISOString(), // Set default order date or update as needed
  };
  const history = await historyService.createHistory(historyData);
  res.status(httpStatus.CREATED).send(history);
});

const getHistories = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['status', 'orderdate']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await historyService.queryHistories(filter, options);
  res.send(result);
});

const getHistory = catchAsync(async (req, res) => {
  const history = await historyService.getHistoryById(req.params.historyId);
  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  res.send(history);
});

const updateHistory = catchAsync(async (req, res) => {
  const history = await historyService.updateHistoryById(req.params.historyId, req.body);
  res.send(history);
});

const deleteHistory = catchAsync(async (req, res) => {
  await historyService.deleteHistoryById(req.params.historyId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createHistory,
  getHistories,
  getHistory,
  updateHistory,
  deleteHistory,
};
