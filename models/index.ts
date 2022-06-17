import Joi from "joi";

// Basic Document fields
export interface DocumentModel {
  createdAt?: string;
  updatedAt?: string;
  // createdBy?: string;
  // updatedBy?: string;
}

export const documentFields = {
  createdAt: Joi.string().isoDate(),
  updatedAt: Joi.string().isoDate(),
};
