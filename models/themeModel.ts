import { ThemeOptions } from "@mui/material";
import Joi from "joi";
import { DocumentModel } from "models";

type MuiTheme = Partial<ThemeOptions>;
export interface ThemeModel extends DocumentModel {
  title: string;
  themeOptions: MuiTheme;
  description?: string;
  uploadedByUid?: string;
}

export const ThemeSchema = Joi.object<ThemeModel>({
  // ...documentFields,
  title: Joi.string().min(3).required().label("Title"),
  description: Joi.string().label(`Description`),
  uploadedByUid: Joi.string(),
});
