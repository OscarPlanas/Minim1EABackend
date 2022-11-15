import ExamConfiguration from '../model/ExamConfiguration';
import User from '../model/User';

import { Request, Response } from 'express';


const createConfig = async (req: Request, res: Response) => {
    const mode = req.body.mode;
	const font = req.body.font;
	const color = req.body.color;
	const background = req.body.background;
    const datecreation = req.body.datecreation;

	const newConfig = new ExamConfiguration({ mode, font, color, background, datecreation });
	await newConfig.save( (err: any) => {
		if (err) {
			return res.status(500).send(err);
		}
	});
    res.status(200).json({ auth: true });
}
const getall = async (req: Request, res: Response) => {
    const exams = await ExamConfiguration.find();
    res.json(exams);
}

const getone = async (req: Request, res: Response) => {
    const exam = await (await User.findById(req.params.id));
    if (!exam) {
        return res.status(404).send('The config does not exist');
    }
    res.json(exam);
}
const setone = async (req: Request, res: Response) => {
    const exam = new ExamConfiguration(req.body);
    await exam.save( (err: any) => {
        if (err) {
            return res.status(500).send
        }
        res.status(200).json({ status: 'Exam saved' });
    });
}

const update = async (req: Request, res: Response) => {
    try{
        const mode = req.body.mode;
        const font= req.body.font;
        const color = req.body.color;
        const background= req.body.background;
        const datecreation= req.body.datecreation;

        const config = await ExamConfiguration.findByIdAndUpdate(req.body._id, {
            mode, font, color, background, datecreation 
        }, {new: true});
        res.json(config).status(200);
    } catch (error) {
		res.status(401).send(error);
    }
}

const deleteConfig = async (req: Request, res: Response) => {
    try {
       await ExamConfiguration.findByIdAndRemove(req.params.id);
        res.status(200).json({ status: 'Exam deleted' });
    }
    catch (error) {
        res.status(500).json({message: 'Exam not found', error });
    }
}
const profileConfig = async (req: Request, res: Response) => {
	const config = await User.findById(req.params.id);
	if (!config) {
		return res.status(404).send('No user found.');
	}
	res.status(200).json(config);
};
export default {
    createConfig,
    getall,
    getone,
    setone,
    update,
    deleteConfig,
    profileConfig
}