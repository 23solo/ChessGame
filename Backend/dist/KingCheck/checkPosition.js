"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kingCheckPosition = void 0;
const kingCheckPosition = (user, position, revert = false) => {
    if (revert) {
        user.kingCheckedFrom = [-1, -1];
        return;
    }
    user.kingCheckedFrom = [position[0], position[1]];
};
exports.kingCheckPosition = kingCheckPosition;
