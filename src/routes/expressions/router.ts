import { Router } from 'express';
import { createExpression, getExpressionTypes, getSlotExpressions, updateAssetExpressionValue, updateAssetsExpressionValue, updateBulkExpressionValues, updateCollectionAssetsExpressionValue, updateExpression } from './handlers';

const expressionsRouter: Router = Router();

expressionsRouter.get('/types', getExpressionTypes);
expressionsRouter.get('/slot', getSlotExpressions);

expressionsRouter.post('/new', createExpression);

expressionsRouter.put('/update', updateExpression);

expressionsRouter.post('/values/nft', updateAssetExpressionValue);
expressionsRouter.post('/values/nfts', updateAssetsExpressionValue);
expressionsRouter.post('/values/collection', updateCollectionAssetsExpressionValue);
expressionsRouter.post('/values/bulk', updateBulkExpressionValues);

export default expressionsRouter;