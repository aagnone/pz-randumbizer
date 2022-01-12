import bf from '../assets/occupations/icon_rasBurgerFlipper.png'
import burg from '../assets/occupations/icon_rasBurglar.png'
import carp from '../assets/occupations/icon_rasCarpenter.png'
import cf from '../assets/occupations/icon_rasChef.png'
import cw from '../assets/occupations/icon_rasConstructionWorker.png'
import dr from '../assets/occupations/icon_rasDoctor.png'
import elec from '../assets/occupations/icon_rasElectrician.png'
import eng from '../assets/occupations/icon_rasEngineer.png'
import farm from '../assets/occupations/icon_rasFarmer.png'
import fire from '../assets/occupations/icon_rasFirefighter.png'
import fish from '../assets/occupations/icon_rasFisherman.png'
import fit from '../assets/occupations/icon_rasFitnessInstructor.png'
import lj from '../assets/occupations/icon_rasLumberjack.png'
import mech from '../assets/occupations/icon_rasMechanic.png'
import metal from '../assets/occupations/icon_rasMetalWorker.png'
import nur from '../assets/occupations/icon_rasNurse.png'
import pr from '../assets/occupations/icon_rasParkranger.png'
import po from '../assets/occupations/icon_rasPoliceOfficer.png'
import sg from '../assets/occupations/icon_rasSecurityGuard.png'
import vet from '../assets/occupations/icon_rasVeteran.png'
import repair from '../assets/occupations/icon_repair.png'

const totalPopulation = 329500000
const unemployed = { name: 'unemployed', value: 6300000, balance: 8, icon: '' }
const fireman = { name: 'fireman', value: 142017, balance: 0, icon: fire }
const police = { name: 'police officer', value: 696644, balance: -4, icon: po }
const parkrangers = { name: 'park ranger', value: 14086, balance: -4, icon: pr }
const constructionWorkers = {
  name: 'construction workers',
  value: 7500000,
  balance: -2,
  icon: cw,
}
const securityGuards = { name: 'security guard', value: 1054400, balance: -2, icon: sg }
const carpenters = { name: 'carpenter', value: 699300, balance: 2, icon: carp }
const burgler = { name: 'burgler', value: 1117696, balance: -6, icon: burg }
const chefs = { name: 'chef', value: 202490, balance: -4, icon: cf }
const repairman = { name: 'repairman', value: 1444100, balance: -4, icon: repair }
const farmer = { name: 'farmer', value: 888300, balance: 2, icon: farm }
const fisherman = { name: 'fisherman', value: 8160000, balance: -2, icon: fish }
const doctor = { name: 'doctor', value: 727000, balance: 2, icon: dr }
const veteran = { name: 'veteran', value: 7242000, balance: -8, icon: vet }
const nurses = { name: 'nurse', value: 3080000, balance: 2, icon: nur }
const lumberjack = { name: 'lumberjack', value: 45000, balance: 0, icon: lj }
const fitnessInstructor = {
  name: 'fitness instructor',
  value: 309800,
  balance: -6,
  icon: fit,
}
const fastFood = { name: 'burger flipper', value: 4100000, balance: 2, icon: bf }
const electrician = { name: 'electrician', value: 729600, balance: -4, icon: elec }
const engineer = { name: 'engineer', value: 600000, balance: -4, icon: eng }
const welder = { name: 'welder', value: 418200, balance: -6, icon: metal }
const mechanic = { name: 'mechanic', value: 800000, balance: -4, icon: mech }

// put all jobs into an array
const allJobs = [
  unemployed,
  fireman,
  police,
  parkrangers,
  constructionWorkers,
  securityGuards,
  carpenters,
  burgler,
  chefs,
  repairman,
  farmer,
  fisherman,
  doctor,
  veteran,
  nurses,
  lumberjack,
  fitnessInstructor,
  fastFood,
  electrician,
  engineer,
  welder,
  mechanic,
]

// map the jobs into an array with all weighted values
const demographics = allJobs.map((job) => {
  return { ...job, weight: job.value / totalPopulation }
})

console.log(demographics)

export { demographics }
