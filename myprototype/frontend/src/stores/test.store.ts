import { defineStore } from 'pinia'

const tests = [
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 20,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 30,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 40,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 50,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 60,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 70,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 80,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 90,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 100,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 20,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 70,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 90,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 10,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 30,
	},
	{
		name: 'VipCallPersons',
		code: 'VipCallPersons',
		date: '04/06/2022 18:00',
		result: 'pass',
		max_score: 20,
	},
]

export const useTestStore = defineStore('test', {
	actions: {
		getTests() {
			return tests
		},
	},
	state: () => ({
		tests,
	}),
})
