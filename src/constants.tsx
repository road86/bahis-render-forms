/* tslint:disable */
export const DEMO_FORM_JSON = {
  "default_language": "default",
  "id_string": "farm_assessment_monitoring_form",
  "children": [
    {
      "name": "note1",
      "bind": {
        "required": "required"
      },
      "label": "BANGLADESH U2c Initiative FARM ASSESSMENT AND MONITORING REPORT Reporting Unit: Farm",
      "type": "note"
    },
    {
      "control": {
        "appearance": "w10"
      },
      "children": [
        {
          "name": "farm_id",
          "label": "FARM ID (as shown in the database):",
          "type": "text"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "First assessment report"
            },
            {
              "name": "2",
              "label": "Follow-up monitoring report"
            }
          ],
          "name": "report_type",
          "bind": {
            "required": "TRUE"
          },
          "label": "*1. Report type (check one) \u00f0 \u00f0 (write Farm ID above as issued at first visit)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "date_initial_visit",
          "bind": {
            "required": "TRUE"
          },
          "label": "*2. Date of initial visit (dd-mm-yyyy)",
          "type": "date"
        },
        {
          name: 'date_time_widget',
          hint: 'dateTime type with no appearance',
          label: 'Date time widget',
          type: 'dateTime',
          bind: {
            required: 'Yes',
          },
        },
        {
          name: 'time_widget',
          hint: 'time type with no appearance',
          label: 'Time widget',
          type: 'time',
        },
        {
          "control": {
            "appearance": "w2 minimal"
          },
          "children": [
            {
              "name": "10",
              "label": "BARISAL"
            },
            {
              "name": "20",
              "label": "CHITTAGONG"
            },
            {
              "name": "30",
              "label": "DHAKA"
            },
            {
              "name": "40",
              "label": "KHULNA"
            },
            {
              "name": "50",
              "label": "RAJSHAHI"
            },
            {
              "name": "55",
              "label": "RANGPUR"
            },
            {
              "name": "60",
              "label": "SYLHET"
            }
          ],
          "name": "division",
          "bind": {
            "required": "TRUE"
          },
          "label": "*3. Division (block letters)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w2 minimal"
          },
          "itemset": "district",
          "name": "district",
          "bind": {
            "required": "TRUE"
          },
          "choice_filter": "myfilter = ${division}",
          "label": "*4. District (block letters)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w2 minimal"
          },
          "itemset": "upazila",
          "name": "upazila",
          "bind": {
            "required": "TRUE"
          },
          "choice_filter": "myfilter = ${district}",
          "label": "*5. Upazila (block letters)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w2 minimal"
          },
          "itemset": "union",
          "name": "union",
          "bind": {
            "required": "TRUE"
          },
          "choice_filter": "myfilter = ${upazila}",
          "label": "*6. Union (block letters)",
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "mouza",
          "label": "7. Mouza (block letters) (optional)",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "village",
          "bind": {
            "required": "TRUE"
          },
          "label": "*8. Village (block letters)",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "address",
          "bind": {
            "required": "TRUE"
          },
          "label": "*9. Address (block letters)",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "owner_name",
          "bind": {
            "required": "TRUE"
          },
          "label": "*10. Owner\u2019s name (block letters)",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2 numbers"
          },
          "name": "mobile_owner",
          "bind": {
            "required": "TRUE"
          },
          "label": "*11. Owner phone number (numbers)",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Corporate contract"
            },
            {
              "name": "2",
              "label": "Independent"
            },
            {
              "name": "3",
              "label": "Personal contract (dealer)"
            },
            {
              "name": "4",
              "label": "Rental"
            }
          ],
          "name": "farm_ownership_type",
          "bind": {
            "required": "TRUE"
          },
          "label": "*12. Farm Ownership Type (check one)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Owner"
            },
            {
              "name": "2",
              "label": "Farm manager"
            },
            {
              "name": "3",
              "label": "Farm worker"
            },
            {
              "name": "4",
              "label": "Dealer"
            }
          ],
          "name": "type_person_interviewed",
          "bind": {
            "required": "TRUE"
          },
          "label": "*13. Persons interviewed (check one)",
          "type": "select one"
        },
        {
          "name": "gps",
          "label": "GPS",
          "type": "gps"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Chicken"
            },
            {
              "name": "2",
              "label": "Duck"
            },
            {
              "name": "3",
              "label": "Goose"
            },
            {
              "name": "4",
              "label": "Pigeon"
            },
            {
              "name": "5",
              "label": "Quail"
            },
            {
              "name": "6",
              "label": "Turkey"
            },
            {
              "name": "7",
              "label": "Guinea"
            }
          ],
          "name": "type_species",
          "bind": {
            "required": "TRUE"
          },
          "label": "*16. Species (check all that apply)",
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Brown Comm"
            },
            {
              "name": "2",
              "label": "White Comm"
            },
            {
              "name": "3",
              "label": "Deshi (backyard)"
            },
            {
              "name": "4",
              "label": "Sonali"
            }
          ],
          "name": "type_chicken",
          "bind": {
            "relevant": "selected(${type_species},'1')",
            "required": "TRUE"
          },
          "label": "Chicken Type",
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w5"
          },
          "name": "standing_population_birds",
          "bind": {
            "required": "TRUE"
          },
          "label": "*17. Standing population (number) birds",
          "type": "integer"
        },
        {
          "control": {
            "appearance": "w5"
          },
          "name": "maximum_farm_capacity_birds",
          "bind": {
            "required": "TRUE"
          },
          "label": "*18. Maximum farm capacity (number) birds",
          "type": "decimal"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Egg"
            },
            {
              "name": "2",
              "label": "Meat"
            },
            {
              "name": "3",
              "label": "Egg & Meat"
            },
            {
              "name": "4",
              "label": "Breeder"
            },
            {
              "name": "5",
              "label": "Sport"
            },
            {
              "name": "6",
              "label": "Pet"
            }
          ],
          "name": "birds_production_purpose",
          "bind": {
            "required": "TRUE"
          },
          "label": "*19. Birds production purpose (check one)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "DOC"
            },
            {
              "name": "2",
              "label": "Pullet"
            },
            {
              "name": "3",
              "label": "Adult"
            }
          ],
          "name": "age_arrival_farm",
          "bind": {
            "required": "TRUE"
          },
          "label": "*20. Age at arrival on farm (check one)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "previously_avian_influenza_investigate",
          "bind": {
            "required": "TRUE"
          },
          "label": "*21. Has an avian influenza investigation been conducted previously on this farm?",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5"
          },
          "name": "date_previously_avian_influenza_investigate",
          "bind": {
            "relevant": "${previously_avian_influenza_investigate}=1"
          },
          "label": "Approximate date (dd-mm-yyyy)",
          "type": "date"
        }
      ],
      "name": "farm_profile",
      "label": "Farm Profile",
      "type": "group"
    },
    {
      "control": {
        "appearance": "w10"
      },
      "children": [
        {
          "name": "vaccine1_ai_vaccination_used",
          "label": "22. Vaccine 1: Name of AI vaccine used (product full name)",
          "type": "text"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Age basis:"
            },
            {
              "name": "2",
              "label": "Calendar basis"
            },
            {
              "name": "3",
              "label": "After outbreak"
            },
            {
              "name": "4",
              "label": "No schedule (farmer doesn\u2019t know)"
            }
          ],
          "name": "schedule_vaccine1",
          "bind": {
            "relevant": "string-length(${vaccine1_ai_vaccination_used})> 0"
          },
          "label": "23.Schedule used for Vaccine 1: (check one)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "0-2 weeks"
            },
            {
              "name": "2",
              "label": "3-5 weeks"
            },
            {
              "name": "3",
              "label": "6-8 weeks"
            },
            {
              "name": "4",
              "label": "9-11 weeks"
            },
            {
              "name": "5",
              "label": "12-14 weeks"
            },
            {
              "name": "6",
              "label": "15 \u2013 17 weeks"
            },
            {
              "name": "7",
              "label": "18-20 weeks"
            }
          ],
          "name": "schedule_vaccine1_before_production",
          "bind": {
            "relevant": "${schedule_vaccine1}=1"
          },
          "label": "24. Before production (check all that apply)",
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "21-30 weeks"
            },
            {
              "name": "2",
              "label": "31-40 weeks"
            },
            {
              "name": "3",
              "label": "41-50 weeks"
            },
            {
              "name": "4",
              "label": "51-60 weeks"
            },
            {
              "name": "5",
              "label": "61-70 weeks"
            },
            {
              "name": "6",
              "label": "71-80 weeks"
            }
          ],
          "name": "schedule_vaccine1_after_production",
          "bind": {
            "relevant": "${schedule_vaccine1}=1"
          },
          "label": "25. After production (check all that apply)",
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "name": "note_26",
          "bind": {
            "relevant": "${schedule_vaccine1}=2"
          },
          "label": "26. Dates of the last 3 AI Vaccination",
          "type": "note"
        },
        {
          "control": {
            "appearance": "w3 month-year"
          },
          "name": "date1_last3_ai_vaccination1",
          "bind": {
            "relevant": "${schedule_vaccine1}=2"
          },
          "label": "Date-1",
          "type": "date"
        },
        {
          "control": {
            "appearance": "w3 month-year"
          },
          "name": "date2_last3_ai_vaccination1",
          "bind": {
            "relevant": "${schedule_vaccine1}=2"
          },
          "label": "Date-1",
          "type": "date"
        },
        {
          "control": {
            "appearance": "w3 month-year"
          },
          "name": "date3_last3_ai_vaccination1",
          "bind": {
            "relevant": "${schedule_vaccine1}=2"
          },
          "label": "Date-1",
          "type": "date"
        },
        {
          "name": "vaccine2_ai_vaccination_used",
          "label": "27. Vaccine 2: Name of AI vaccine used (product full name)",
          "type": "text"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Age basis:"
            },
            {
              "name": "2",
              "label": "Calendar basis"
            },
            {
              "name": "3",
              "label": "After outbreak"
            },
            {
              "name": "4",
              "label": "No schedule (farmer doesn\u2019t know)"
            }
          ],
          "name": "schedule_vaccine2",
          "bind": {
            "relevant": "string-length(${vaccine2_ai_vaccination_used})> 0"
          },
          "label": "28.Schedule used for Vaccine 2: (check one)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "0-2 weeks"
            },
            {
              "name": "2",
              "label": "3-5 weeks"
            },
            {
              "name": "3",
              "label": "6-8 weeks"
            },
            {
              "name": "4",
              "label": "9-11 weeks"
            },
            {
              "name": "5",
              "label": "12-14 weeks"
            },
            {
              "name": "6",
              "label": "15 \u2013 17 weeks"
            },
            {
              "name": "7",
              "label": "18-20 weeks"
            }
          ],
          "name": "schedule_vaccine2_before_production",
          "bind": {
            "relevant": "${schedule_vaccine2}=1"
          },
          "label": "29. Before production (check all that apply)",
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "21-30 weeks"
            },
            {
              "name": "2",
              "label": "31-40 weeks"
            },
            {
              "name": "3",
              "label": "41-50 weeks"
            },
            {
              "name": "4",
              "label": "51-60 weeks"
            },
            {
              "name": "5",
              "label": "61-70 weeks"
            },
            {
              "name": "6",
              "label": "71-80 weeks"
            }
          ],
          "name": "schedule_vaccine2_after_production",
          "bind": {
            "relevant": "${schedule_vaccine2}=1"
          },
          "label": "30. After production (check all that apply)",
          "type": "select all that apply"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "name": "note",
          "bind": {
            "relevant": "${schedule_vaccine2}=2"
          },
          "label": "31. Dates of the last 3 AI Vaccination",
          "type": "note"
        },
        {
          "control": {
            "appearance": "w3 month-year"
          },
          "name": "date1_last3_ai_vaccination2",
          "bind": {
            "relevant": "${schedule_vaccine2}=2"
          },
          "label": "Date-1",
          "type": "date"
        },
        {
          "control": {
            "appearance": "w3 month-year"
          },
          "name": "date2_last3_ai_vaccination2",
          "bind": {
            "relevant": "${schedule_vaccine2}=2"
          },
          "label": "Date-1",
          "type": "date"
        },
        {
          "control": {
            "appearance": "w3 month-year"
          },
          "name": "date3_last3_ai_vaccination2",
          "bind": {
            "relevant": "${schedule_vaccine2}=2"
          },
          "label": "Date-1",
          "type": "date"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Outside vaccinator"
            },
            {
              "name": "2",
              "label": "Farm Staff"
            },
            {
              "name": "3",
              "label": "Both"
            }
          ],
          "name": "vaccination_given_by",
          "bind": {
            "relevant": "string-length(${vaccine1_ai_vaccination_used})> 0 or string-length(${vaccine2_ai_vaccination_used})> 0"
          },
          "label": "32. Vaccination given by",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Vaccination record"
            },
            {
              "name": "2",
              "label": "Semi-structure interview"
            }
          ],
          "name": "vaccine_means_verification",
          "bind": {
            "relevant": "string-length(${vaccine1_ai_vaccination_used})> 0 or string-length(${vaccine2_ai_vaccination_used})> 0"
          },
          "label": "33. Means of verification",
          "type": "select one"
        }
      ],
      "name": "note_ai_vaccin",
      "label": "AI vaccination practices",
      "type": "group"
    },
    {
      "control": {
        "appearance": "w10"
      },
      "children": [
        {
          "name": "access_control_at_farm",
          "label": "*34. A. Access control at farm entrance",
          "type": "note"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "outside_worker_do_not_enter_farm",
          "bind": {
            "required": "TRUE"
          },
          "label": "A.1 Outside vehicles do not enter farm, only essential vehicles (e.g. feed, egg)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "only_workers_approved_visitor_enter_farm",
          "bind": {
            "required": "TRUE"
          },
          "label": "A.2 Only workers and approved visitors enter farm",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "no_manure_collector_enter_farm",
          "bind": {
            "required": "TRUE"
          },
          "label": "A.3 No manure collectors enter farm",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "fenced_duck_chicken_proof",
          "bind": {
            "required": "TRUE"
          },
          "label": "A.4 Farm area is fully fenced and duck/chicken proof",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "dead_birds_disposed_safely",
          "bind": {
            "required": "TRUE"
          },
          "label": "A.5 Dead birds disposed safely",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "sign_posted",
          "bind": {
            "required": "TRUE"
          },
          "label": "A.6 Signs posted",
          "type": "select one"
        },
        {
          "name": "access_control_loading_area_production_area",
          "label": "*B. Access control between loading area and production area",
          "type": "note"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "no_vehical_in_out_production_area",
          "bind": {
            "required": "TRUE"
          },
          "label": "B.1 No movement of vehicles in and out the production area",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "only_workers_enter_production_area",
          "bind": {
            "required": "TRUE"
          },
          "label": "B.2 Only workers enter production area",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "visitors_enter_production_if_approve_manager",
          "bind": {
            "required": "TRUE"
          },
          "label": "B.3 Only visitors enter production area if accompanied by farm manager",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "access_control_loading_production_sign_posted",
          "bind": {
            "required": "TRUE"
          },
          "label": "B.4 Signs posted",
          "type": "select one"
        },
        {
          "name": "personnel_management",
          "label": "*C. Personnel management",
          "type": "note"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "footwear_left_outside",
          "bind": {
            "required": "TRUE"
          },
          "label": "C.1 Outside footwear left outside farm",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "change_clothes_entering_farm",
          "bind": {
            "required": "TRUE"
          },
          "label": "C.2 Workers and visitors change clothes upon entering farm",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "uses_dedicated_footwear",
          "bind": {
            "required": "TRUE"
          },
          "label": "C.3 Workers and visitors use only dedicated footwear in production area",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "shower_entering_farm",
          "bind": {
            "required": "TRUE"
          },
          "label": "C.4 Worker and visitors shower upon entering farm",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "name": "equip_management",
          "label": "*D. Equipment management",
          "type": "note"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "returning_materials_cleaned",
          "bind": {
            "required": "TRUE"
          },
          "label": "D.1 materials returning from market or other farm cleaned with soap and water before entering the farm",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Yes"
            },
            {
              "name": "2",
              "label": "No"
            }
          ],
          "name": "returning_materials_disinfect",
          "bind": {
            "required": "TRUE"
          },
          "label": "D.2 materials returning from market or other farm disinfected before entering the farm",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "buried"
            },
            {
              "name": "2",
              "label": "river"
            },
            {
              "name": "3",
              "label": "rubbish pit"
            },
            {
              "name": "4",
              "label": "pond"
            },
            {
              "name": "5",
              "label": "open place/bush"
            },
            {
              "name": "6",
              "label": "rubbish container"
            },
            {
              "name": "7",
              "label": "food/feed"
            }
          ],
          "name": "dead_bird_management_practice",
          "bind": {
            "required": "TRUE"
          },
          "label": "*35. Most common dead bird management practice (check one)",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "direct observation"
            },
            {
              "name": "2",
              "label": "semi-structured interview"
            },
            {
              "name": "3",
              "label": "compared to biosecurity design plan"
            }
          ],
          "name": "farm_entrance_means_verification",
          "bind": {
            "required": "TRUE"
          },
          "label": "*36. Means of verification (check all that apply)",
          "type": "select all that apply"
        }
      ],
      "name": "biosecurity_practises",
      "label": "Biosecurity practises",
      "type": "group"
    },
    {
      "control": {
        "appearance": "w10"
      },
      "children": [
        {
          "name": "antibacterial_usages_product1",
          "label": "37. Product name:",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Salesman"
            },
            {
              "name": "2",
              "label": "Govt"
            },
            {
              "name": "3",
              "label": "Market"
            },
            {
              "name": "4",
              "label": "Dealer"
            },
            {
              "name": "5",
              "label": "Vet"
            },
            {
              "name": "6",
              "label": "Quack"
            }
          ],
          "name": "antibacterial_usage_salesman_product1",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product1})> 0"
          },
          "label": "Source",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Infection/sick"
            },
            {
              "name": "2",
              "label": "Prevention"
            },
            {
              "name": "3",
              "label": "Faster growth/more eggs"
            }
          ],
          "name": "antibacterial_usage_prevention_product1",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product1})> 0"
          },
          "label": "Purpose",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Drinking water"
            },
            {
              "name": "2",
              "label": "Feed"
            },
            {
              "name": "3",
              "label": "Injection"
            }
          ],
          "name": "antibacterial_usage_drinking_water_product1",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product1})> 0"
          },
          "label": "Route",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Twice a day"
            },
            {
              "name": "2",
              "label": "Once a day"
            },
            {
              "name": "3",
              "label": "Once a week"
            },
            {
              "name": "4",
              "label": "Once a month"
            },
            {
              "name": "5",
              "label": "After illness"
            },
            {
              "name": "6",
              "label": "Before winter"
            }
          ],
          "name": "antibacterial_frequency_product1",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product1})> 0"
          },
          "label": "Freuency",
          "type": "select one"
        },
        {
          "name": "antibacterial_usages_product2",
          "label": "38. Product name:",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Salesman"
            },
            {
              "name": "2",
              "label": "Govt"
            },
            {
              "name": "3",
              "label": "Market"
            },
            {
              "name": "4",
              "label": "Dealer"
            },
            {
              "name": "5",
              "label": "Vet"
            },
            {
              "name": "6",
              "label": "Quack"
            }
          ],
          "name": "antibacterial_usage_salesman_product2",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product2})> 0"
          },
          "label": "Source",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Infection/sick"
            },
            {
              "name": "2",
              "label": "Prevention"
            },
            {
              "name": "3",
              "label": "Faster growth/more eggs"
            }
          ],
          "name": "antibacterial_usage_prevention_product2",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product2})> 0"
          },
          "label": "Purpose",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Drinking water"
            },
            {
              "name": "2",
              "label": "Feed"
            },
            {
              "name": "3",
              "label": "Injection"
            }
          ],
          "name": "antibacterial_usage_drinking_water_product2",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product2})> 0"
          },
          "label": "Route",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Twice a day"
            },
            {
              "name": "2",
              "label": "Once a day"
            },
            {
              "name": "3",
              "label": "Once a week"
            },
            {
              "name": "4",
              "label": "Once a month"
            },
            {
              "name": "5",
              "label": "After illness"
            },
            {
              "name": "6",
              "label": "Before winter"
            }
          ],
          "name": "antibacterial_frequency_product2",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product2})> 0"
          },
          "label": "Freuency",
          "type": "select one"
        },
        {
          "name": "antibacterial_usages_product3",
          "label": "39. Product name:",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Salesman"
            },
            {
              "name": "2",
              "label": "Govt"
            },
            {
              "name": "3",
              "label": "Market"
            },
            {
              "name": "4",
              "label": "Dealer"
            },
            {
              "name": "5",
              "label": "Vet"
            },
            {
              "name": "6",
              "label": "Quack"
            }
          ],
          "name": "antibacterial_usage_salesman_product3",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product3})> 0"
          },
          "label": "Source",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Infection/sick"
            },
            {
              "name": "2",
              "label": "Prevention"
            },
            {
              "name": "3",
              "label": "Faster growth/more eggs"
            }
          ],
          "name": "antibacterial_usage_prevention_product3",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product3})> 0"
          },
          "label": "Purpose",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Drinking water"
            },
            {
              "name": "2",
              "label": "Feed"
            },
            {
              "name": "3",
              "label": "Injection"
            }
          ],
          "name": "antibacterial_usage_drinking_water_product3",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product3})> 0"
          },
          "label": "Route",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Twice a day"
            },
            {
              "name": "2",
              "label": "Once a day"
            },
            {
              "name": "3",
              "label": "Once a week"
            },
            {
              "name": "4",
              "label": "Once a month"
            },
            {
              "name": "5",
              "label": "After illness"
            },
            {
              "name": "6",
              "label": "Before winter"
            }
          ],
          "name": "antibacterial_frequency_product3",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product3})> 0"
          },
          "label": "Freuency",
          "type": "select one"
        },
        {
          "name": "antibacterial_usages_product4",
          "label": "40. Product name:",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Salesman"
            },
            {
              "name": "2",
              "label": "Govt"
            },
            {
              "name": "3",
              "label": "Market"
            },
            {
              "name": "4",
              "label": "Dealer"
            },
            {
              "name": "5",
              "label": "Vet"
            },
            {
              "name": "6",
              "label": "Quack"
            }
          ],
          "name": "antibacterial_usage_salesman_product4",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product4})> 0"
          },
          "label": "Source",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Infection/sick"
            },
            {
              "name": "2",
              "label": "Prevention"
            },
            {
              "name": "3",
              "label": "Faster growth/more eggs"
            }
          ],
          "name": "antibacterial_usage_prevention_product4",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product4})> 0"
          },
          "label": "Purpose",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Drinking water"
            },
            {
              "name": "2",
              "label": "Feed"
            },
            {
              "name": "3",
              "label": "Injection"
            }
          ],
          "name": "antibacterial_usage_drinking_water_product4",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product4})> 0"
          },
          "label": "Route",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Twice a day"
            },
            {
              "name": "2",
              "label": "Once a day"
            },
            {
              "name": "3",
              "label": "Once a week"
            },
            {
              "name": "4",
              "label": "Once a month"
            },
            {
              "name": "5",
              "label": "After illness"
            },
            {
              "name": "6",
              "label": "Before winter"
            }
          ],
          "name": "antibacterial_frequency_product4",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product4})> 0"
          },
          "label": "Freuency",
          "type": "select one"
        },
        {
          "name": "antibacterial_usages_product5",
          "label": "41. Product name:",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Salesman"
            },
            {
              "name": "2",
              "label": "Govt"
            },
            {
              "name": "3",
              "label": "Market"
            },
            {
              "name": "4",
              "label": "Dealer"
            },
            {
              "name": "5",
              "label": "Vet"
            },
            {
              "name": "6",
              "label": "Quack"
            }
          ],
          "name": "antibacterial_usage_salesman_product5",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product5})> 0"
          },
          "label": "Source",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Infection/sick"
            },
            {
              "name": "2",
              "label": "Prevention"
            },
            {
              "name": "3",
              "label": "Faster growth/more eggs"
            }
          ],
          "name": "antibacterial_usage_prevention_product5",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product5})> 0"
          },
          "label": "Purpose",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Drinking water"
            },
            {
              "name": "2",
              "label": "Feed"
            },
            {
              "name": "3",
              "label": "Injection"
            }
          ],
          "name": "antibacterial_usage_drinking_water_product5",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product5})> 0"
          },
          "label": "Route",
          "type": "select one"
        },
        {
          "control": {
            "appearance": "w5 horizontal-compact"
          },
          "children": [
            {
              "name": "1",
              "label": "Twice a day"
            },
            {
              "name": "2",
              "label": "Once a day"
            },
            {
              "name": "3",
              "label": "Once a week"
            },
            {
              "name": "4",
              "label": "Once a month"
            },
            {
              "name": "5",
              "label": "After illness"
            },
            {
              "name": "6",
              "label": "Before winter"
            }
          ],
          "name": "antibacterial_frequency_product5",
          "bind": {
            "relevant": "string-length(${antibacterial_usages_product5})> 0"
          },
          "label": "Freuency",
          "type": "select one"
        }
      ],
      "name": "antibacterial_uasges",
      "label": "Antibacterial usage",
      "type": "group"
    },
    {
      "control": {
        "appearance": "multiline"
      },
      "name": "farmer_concern",
      "label": "*42. \u201cDescribe the farmer\u2019s concerns. What would the farmer like assistance with?\u201d",
      "type": "text"
    },
    {
      "name": "image",
      "label": "*43. Outline/draw the farm biosecurity plan in place (take a photo and upload in database)",
      "type": "photo"
    },
    {
      "children": [
        {
          "control": {
            "appearance": "w2"
          },
          "name": "field_staff1",
          "label": "*FIELD STAFF-1",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "field_staff2",
          "label": "*FIELD STAFF-1",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "ackknowlwdge_by",
          "label": "*Acknowledged by:",
          "type": "text"
        },
        {
          "control": {
            "appearance": "w2"
          },
          "name": "approved_by",
          "label": "*Approved by:",
          "type": "text"
        }
      ],
      "name": "name",
      "type": "group"
    },
    {
      "name": "start",
      "type": "start"
    },
    {
      "name": "end",
      "type": "end"
    },
    {
      "name": "username",
      "type": "username"
    },
    {
      "control": {
        "bodyless": true
      },
      "children": [
        {
          "name": "instanceID",
          "bind": {
            "readonly": "true()",
            "calculate": "concat('uuid:', uuid())"
          },
          "type": "calculate"
        }
      ],
      "name": "meta",
      "type": "group"
    }
  ],
  "style": "theme-grid",
  "type": "survey",
  "name": "farm_assessment_form",
  "sms_keyword": "farm_assessment_monitoring_form",
  "title": "Farm Assessment and Monitoring Form",
  "choices": {
    "yesno": [
      {
        "name": "1",
        "label": "Yes"
      },
      {
        "name": "2",
        "label": "No"
      }
    ],
    "type_person_interviewed": [
      {
        "name": "1",
        "label": "Owner"
      },
      {
        "name": "2",
        "label": "Farm manager"
      },
      {
        "name": "3",
        "label": "Farm worker"
      },
      {
        "name": "4",
        "label": "Dealer"
      }
    ],
    "schedule_vaccine1": [
      {
        "name": "1",
        "label": "Age basis:"
      },
      {
        "name": "2",
        "label": "Calendar basis"
      },
      {
        "name": "3",
        "label": "After outbreak"
      },
      {
        "name": "4",
        "label": "No schedule (farmer doesn\u2019t know)"
      }
    ],
    "dead_bird_management": [
      {
        "name": "1",
        "label": "buried"
      },
      {
        "name": "2",
        "label": "river"
      },
      {
        "name": "3",
        "label": "rubbish pit"
      },
      {
        "name": "4",
        "label": "pond"
      },
      {
        "name": "5",
        "label": "open place/bush"
      },
      {
        "name": "6",
        "label": "rubbish container"
      },
      {
        "name": "7",
        "label": "food/feed"
      }
    ],
    "frequency": [
      {
        "name": "1",
        "label": "Twice a day"
      },
      {
        "name": "2",
        "label": "Once a day"
      },
      {
        "name": "3",
        "label": "Once a week"
      },
      {
        "name": "4",
        "label": "Once a month"
      },
      {
        "name": "5",
        "label": "After illness"
      },
      {
        "name": "6",
        "label": "Before winter"
      }
    ],
    "antibacterial_usage_prevention": [
      {
        "name": "1",
        "label": "Faster"
      },
      {
        "name": "2",
        "label": "growth/ more eggs"
      },
      {
        "name": "3"
      }
    ],
    "report_type": [
      {
        "name": "1",
        "label": "First assessment report"
      },
      {
        "name": "2",
        "label": "Follow-up monitoring report"
      }
    ],
    "district": [
      {
        "myfilter": "10",
        "name": "1004",
        "label": "BARGUNA"
      },
      {
        "myfilter": "10",
        "name": "1006",
        "label": "BARISAL"
      },
      {
        "myfilter": "10",
        "name": "1009",
        "label": "BHOLA"
      },
      {
        "myfilter": "10",
        "name": "1042",
        "label": "JHALOKATI"
      },
      {
        "myfilter": "10",
        "name": "1078",
        "label": "PATUAKHALI"
      },
      {
        "myfilter": "10",
        "name": "1079",
        "label": "PIROJPUR"
      },
      {
        "myfilter": "20",
        "name": "2003",
        "label": "BANDARBAN"
      },
      {
        "myfilter": "20",
        "name": "2012",
        "label": "BRAHMANBARIA"
      },
      {
        "myfilter": "20",
        "name": "2013",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "20",
        "name": "2015",
        "label": "CHITTAGONG"
      },
      {
        "myfilter": "20",
        "name": "2019",
        "label": "COMILLA"
      },
      {
        "myfilter": "20",
        "name": "2022",
        "label": "COX'S BAZAR"
      },
      {
        "myfilter": "20",
        "name": "2030",
        "label": "FENI"
      },
      {
        "myfilter": "20",
        "name": "2046",
        "label": "KHAGRACHHARI"
      },
      {
        "myfilter": "20",
        "name": "2051",
        "label": "LAKSHMIPUR"
      },
      {
        "myfilter": "20",
        "name": "2075",
        "label": "NOAKHALI"
      },
      {
        "myfilter": "20",
        "name": "2084",
        "label": "RANGAMATI"
      },
      {
        "myfilter": "30",
        "name": "3026",
        "label": "DHAKA"
      },
      {
        "myfilter": "30",
        "name": "3029",
        "label": "FARIDPUR"
      },
      {
        "myfilter": "30",
        "name": "3033",
        "label": "GAZIPUR"
      },
      {
        "myfilter": "30",
        "name": "3035",
        "label": "GOPALGANJ"
      },
      {
        "myfilter": "30",
        "name": "3039",
        "label": "JAMALPUR"
      },
      {
        "myfilter": "30",
        "name": "3048",
        "label": "KISHOREGONJ"
      },
      {
        "myfilter": "30",
        "name": "3054",
        "label": "MADARIPUR"
      },
      {
        "myfilter": "30",
        "name": "3056",
        "label": "MANIKGANJ"
      },
      {
        "myfilter": "30",
        "name": "3059",
        "label": "MUNSHIGANJ"
      },
      {
        "myfilter": "30",
        "name": "3061",
        "label": "MYMENSINGH"
      },
      {
        "myfilter": "30",
        "name": "3067",
        "label": "NARAYANGANJ"
      },
      {
        "myfilter": "30",
        "name": "3068",
        "label": "NARSINGDI"
      },
      {
        "myfilter": "30",
        "name": "3072",
        "label": "NETRAKONA"
      },
      {
        "myfilter": "30",
        "name": "3082",
        "label": "RAJBARI"
      },
      {
        "myfilter": "30",
        "name": "3086",
        "label": "SHARIATPUR"
      },
      {
        "myfilter": "30",
        "name": "3089",
        "label": "SHERPUR"
      },
      {
        "myfilter": "30",
        "name": "3093",
        "label": "TANGAIL"
      },
      {
        "myfilter": "40",
        "name": "4001",
        "label": "BAGERHAT"
      },
      {
        "myfilter": "40",
        "name": "4018",
        "label": "CHUADANGA"
      },
      {
        "myfilter": "40",
        "name": "4041",
        "label": "JESSORE"
      },
      {
        "myfilter": "40",
        "name": "4044",
        "label": "JHENAIDAH"
      },
      {
        "myfilter": "40",
        "name": "4047",
        "label": "KHULNA"
      },
      {
        "myfilter": "40",
        "name": "4050",
        "label": "KUSHTIA"
      },
      {
        "myfilter": "40",
        "name": "4055",
        "label": "MAGURA"
      },
      {
        "myfilter": "40",
        "name": "4057",
        "label": "MEHERPUR"
      },
      {
        "myfilter": "40",
        "name": "4065",
        "label": "NARAIL"
      },
      {
        "myfilter": "40",
        "name": "4087",
        "label": "SATKHIRA"
      },
      {
        "myfilter": "50",
        "name": "5010",
        "label": "BOGRA"
      },
      {
        "myfilter": "50",
        "name": "5070",
        "label": "CHAPAI NABABGANJ"
      },
      {
        "myfilter": "50",
        "name": "5038",
        "label": "JOYPURHAT"
      },
      {
        "myfilter": "50",
        "name": "5064",
        "label": "NAOGAON"
      },
      {
        "myfilter": "50",
        "name": "5069",
        "label": "NATORE"
      },
      {
        "myfilter": "50",
        "name": "5076",
        "label": "PABNA"
      },
      {
        "myfilter": "50",
        "name": "5081",
        "label": "RAJSHAHI"
      },
      {
        "myfilter": "50",
        "name": "5088",
        "label": "SIRAJGANJ"
      },
      {
        "myfilter": "55",
        "name": "5527",
        "label": "DINAJPUR"
      },
      {
        "myfilter": "55",
        "name": "5532",
        "label": "GAIBANDHA"
      },
      {
        "myfilter": "55",
        "name": "5549",
        "label": "KURIGRAM"
      },
      {
        "myfilter": "55",
        "name": "5552",
        "label": "LALMONIRHAT"
      },
      {
        "myfilter": "55",
        "name": "5573",
        "label": "NILPHAMARI ZILA"
      },
      {
        "myfilter": "55",
        "name": "5577",
        "label": "PANCHAGARH"
      },
      {
        "myfilter": "55",
        "name": "5585",
        "label": "RANGPUR"
      },
      {
        "myfilter": "55",
        "name": "5594",
        "label": "THAKURGAON"
      },
      {
        "myfilter": "60",
        "name": "6036",
        "label": "HABIGANJ"
      },
      {
        "myfilter": "60",
        "name": "6058",
        "label": "MAULVIBAZAR"
      },
      {
        "myfilter": "60",
        "name": "6090",
        "label": "SUNAMGANJ"
      },
      {
        "myfilter": "60",
        "name": "6091",
        "label": "SYLHET"
      }
    ],
    "union": [
      {
        "myfilter": "0409",
        "name": "040913",
        "label": "AMTALI"
      },
      {
        "myfilter": "0409",
        "name": "040915",
        "label": "ARPANGASHIA"
      },
      {
        "myfilter": "0409",
        "name": "040923",
        "label": "ATHARAGASHIA"
      },
      {
        "myfilter": "0409",
        "name": "040947",
        "label": "CHOWRA"
      },
      {
        "myfilter": "0409",
        "name": "040963",
        "label": "GULISAKHALI"
      },
      {
        "myfilter": "0409",
        "name": "040971",
        "label": "HALDIA"
      },
      {
        "myfilter": "0409",
        "name": "040987",
        "label": "KUKUA"
      },
      {
        "myfilter": "0419",
        "name": "041923",
        "label": "BAMNA"
      },
      {
        "myfilter": "0419",
        "name": "041947",
        "label": "BUKABUNIA"
      },
      {
        "myfilter": "0419",
        "name": "041971",
        "label": "DAUATALA"
      },
      {
        "myfilter": "0419",
        "name": "041995",
        "label": "RAMNA"
      },
      {
        "myfilter": "0428",
        "name": "042817",
        "label": "AYLA PATAKATA"
      },
      {
        "myfilter": "0428",
        "name": "042819",
        "label": "BADARKHALI"
      },
      {
        "myfilter": "0428",
        "name": "042828",
        "label": "BARGUNA"
      },
      {
        "myfilter": "0428",
        "name": "042838",
        "label": "BURIR CHAR"
      },
      {
        "myfilter": "0428",
        "name": "042847",
        "label": "DHALUA"
      },
      {
        "myfilter": "0428",
        "name": "042866",
        "label": "GAURICHANNA"
      },
      {
        "myfilter": "0428",
        "name": "042876",
        "label": "KEORABUNIA"
      },
      {
        "myfilter": "0428",
        "name": "042885",
        "label": "M.BALIATALI"
      },
      {
        "myfilter": "0428",
        "name": "042895",
        "label": "NALTONA"
      },
      {
        "myfilter": "0428",
        "name": "042857",
        "label": "PHULJHURY"
      },
      {
        "myfilter": "0447",
        "name": "044711",
        "label": "BETAGI"
      },
      {
        "myfilter": "0447",
        "name": "044723",
        "label": "BIBICHINI"
      },
      {
        "myfilter": "0447",
        "name": "044735",
        "label": "BURA MAZUMDAR"
      },
      {
        "myfilter": "0447",
        "name": "044747",
        "label": "HOSNABAD"
      },
      {
        "myfilter": "0447",
        "name": "044759",
        "label": "KAZIRABAD"
      },
      {
        "myfilter": "0447",
        "name": "044771",
        "label": "MOKAMIA"
      },
      {
        "myfilter": "0447",
        "name": "044783",
        "label": "SARISHAMURI"
      },
      {
        "myfilter": "0485",
        "name": "048511",
        "label": "CHAR DUANTI"
      },
      {
        "myfilter": "0485",
        "name": "048523",
        "label": "KAKCHIRA"
      },
      {
        "myfilter": "0485",
        "name": "048535",
        "label": "KALMEGHA"
      },
      {
        "myfilter": "0485",
        "name": "048547",
        "label": "KANTHALTALI"
      },
      {
        "myfilter": "0485",
        "name": "048559",
        "label": "NACHNA PARA"
      },
      {
        "myfilter": "0485",
        "name": "048571",
        "label": "PATHARGHATA"
      },
      {
        "myfilter": "0485",
        "name": "048583",
        "label": "RAIHANPUR"
      },
      {
        "myfilter": "0490",
        "name": "049039",
        "label": "BARABAGI"
      },
      {
        "myfilter": "0490",
        "name": "049043",
        "label": "CHHOTA BAGI"
      },
      {
        "myfilter": "0490",
        "name": "049079",
        "label": "KARAIBARIA"
      },
      {
        "myfilter": "0490",
        "name": "049091",
        "label": "NISHANBARIA"
      },
      {
        "myfilter": "0490",
        "name": "049094",
        "label": "PANCHA KORALIA"
      },
      {
        "myfilter": "0490",
        "name": "049095",
        "label": "SARIKKHALI"
      },
      {
        "myfilter": "0490",
        "name": "049096",
        "label": "SONAKATA"
      },
      {
        "myfilter": "0602",
        "name": "060213",
        "label": "BAGDHA"
      },
      {
        "myfilter": "0602",
        "name": "060215",
        "label": "BAKAL"
      },
      {
        "myfilter": "0602",
        "name": "060247",
        "label": "GAILA"
      },
      {
        "myfilter": "0602",
        "name": "060279",
        "label": "RAJIHER"
      },
      {
        "myfilter": "0602",
        "name": "060287",
        "label": "RATNAPUR"
      },
      {
        "myfilter": "0603",
        "name": "060327",
        "label": "CHANDPASHA"
      },
      {
        "myfilter": "0603",
        "name": "060340",
        "label": "DEHERGATI"
      },
      {
        "myfilter": "0603",
        "name": "060313",
        "label": "JAHANGIR NAGAR(AGARPUR)"
      },
      {
        "myfilter": "0603",
        "name": "060354",
        "label": "KEDARPUR"
      },
      {
        "myfilter": "0603",
        "name": "060367",
        "label": "MADHAB PASHA"
      },
      {
        "myfilter": "0603",
        "name": "060381",
        "label": "RAHMATPUR"
      },
      {
        "myfilter": "0607",
        "name": "060712",
        "label": "BHAR PASHA"
      },
      {
        "myfilter": "0607",
        "name": "060720",
        "label": "CHAR AMADDI"
      },
      {
        "myfilter": "0607",
        "name": "060713",
        "label": "CHARADI"
      },
      {
        "myfilter": "0607",
        "name": "060727",
        "label": "DARIAL"
      },
      {
        "myfilter": "0607",
        "name": "060733",
        "label": "DUDHAL"
      },
      {
        "myfilter": "0607",
        "name": "060740",
        "label": "DURGA PASHA"
      },
      {
        "myfilter": "0607",
        "name": "060747",
        "label": "FARIDPUR"
      },
      {
        "myfilter": "0607",
        "name": "060754",
        "label": "GARURIA"
      },
      {
        "myfilter": "0607",
        "name": "060761",
        "label": "KABAI"
      },
      {
        "myfilter": "0607",
        "name": "060767",
        "label": "KALASKATI"
      },
      {
        "myfilter": "0607",
        "name": "060774",
        "label": "NALUA"
      },
      {
        "myfilter": "0607",
        "name": "060781",
        "label": "NIAMATI"
      },
      {
        "myfilter": "0607",
        "name": "060788",
        "label": "PADRI SHIBPUR"
      },
      {
        "myfilter": "0607",
        "name": "060794",
        "label": "RANGASREE"
      },
      {
        "myfilter": "0610",
        "name": "061021",
        "label": "BAISARI"
      },
      {
        "myfilter": "0610",
        "name": "061010",
        "label": "BANARIPARA"
      },
      {
        "myfilter": "0610",
        "name": "061031",
        "label": "BISARKANDI"
      },
      {
        "myfilter": "0610",
        "name": "061042",
        "label": "CHAKHAR"
      },
      {
        "myfilter": "0610",
        "name": "061052",
        "label": "ILUHAR"
      },
      {
        "myfilter": "0610",
        "name": "061073",
        "label": "SAIDKATI"
      },
      {
        "myfilter": "0610",
        "name": "061063",
        "label": "SALIA BAKPUR"
      },
      {
        "myfilter": "0610",
        "name": "061084",
        "label": "UDAYKATI"
      },
      {
        "myfilter": "0651",
        "name": "065132",
        "label": "CHANDPURA"
      },
      {
        "myfilter": "0651",
        "name": "065133",
        "label": "CHANDRA MOHAN"
      },
      {
        "myfilter": "0651",
        "name": "065134",
        "label": "CHAR BARIA"
      },
      {
        "myfilter": "0651",
        "name": "065143",
        "label": "CHAR KOWA"
      },
      {
        "myfilter": "0651",
        "name": "065151",
        "label": "CHAR MONAI"
      },
      {
        "myfilter": "0651",
        "name": "065160",
        "label": "JAGUA"
      },
      {
        "myfilter": "0651",
        "name": "065169",
        "label": "KASHIPUR"
      },
      {
        "myfilter": "0651",
        "name": "065177",
        "label": "ROY PASHA KARAPUR"
      },
      {
        "myfilter": "0651",
        "name": "065186",
        "label": "SHAYESTABAD"
      },
      {
        "myfilter": "0651",
        "name": "065194",
        "label": "TUNGIBARIA"
      },
      {
        "myfilter": "0632",
        "name": "063223",
        "label": "BARTHI"
      },
      {
        "myfilter": "0632",
        "name": "063231",
        "label": "BATAJORE"
      },
      {
        "myfilter": "0632",
        "name": "063238",
        "label": "CHANDSHI"
      },
      {
        "myfilter": "0632",
        "name": "063255",
        "label": "KHANJAPUR"
      },
      {
        "myfilter": "0632",
        "name": "063263",
        "label": "MAHILARA"
      },
      {
        "myfilter": "0632",
        "name": "063271",
        "label": "NALCHIRA"
      },
      {
        "myfilter": "0632",
        "name": "063294",
        "label": "SARIKAL"
      },
      {
        "myfilter": "0636",
        "name": "063613",
        "label": "BARA JALIA"
      },
      {
        "myfilter": "0636",
        "name": "063627",
        "label": "DHULKHOLA"
      },
      {
        "myfilter": "0636",
        "name": "063654",
        "label": "GUABARIA"
      },
      {
        "myfilter": "0636",
        "name": "063667",
        "label": "HARINATHPUR"
      },
      {
        "myfilter": "0636",
        "name": "063681",
        "label": "HIZLA GAURABDI"
      },
      {
        "myfilter": "0636",
        "name": "063694",
        "label": "MEMANIA"
      },
      {
        "myfilter": "0662",
        "name": "066213",
        "label": "ALIMABAD"
      },
      {
        "myfilter": "0662",
        "name": "066215",
        "label": "ANDHAR MANIK"
      },
      {
        "myfilter": "0662",
        "name": "066223",
        "label": "BHASAN CHAR"
      },
      {
        "myfilter": "0662",
        "name": "066231",
        "label": "BIDYANANDAPUR"
      },
      {
        "myfilter": "0662",
        "name": "066239",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "0662",
        "name": "066247",
        "label": "CHAR EKKARIA"
      },
      {
        "myfilter": "0662",
        "name": "066255",
        "label": "CHAR GOPALPUR"
      },
      {
        "myfilter": "0662",
        "name": "066263",
        "label": "DARI CHAR KHAJURIA"
      },
      {
        "myfilter": "0662",
        "name": "066240",
        "label": "GOBINDAPUR"
      },
      {
        "myfilter": "0662",
        "name": "066271",
        "label": "JANGALIA"
      },
      {
        "myfilter": "0662",
        "name": "066279",
        "label": "LATA"
      },
      {
        "myfilter": "0662",
        "name": "066287",
        "label": "MEHENDIGANJ"
      },
      {
        "myfilter": "0662",
        "name": "066294",
        "label": "ULANIA"
      },
      {
        "myfilter": "0669",
        "name": "066911",
        "label": "BATAMARA"
      },
      {
        "myfilter": "0669",
        "name": "066923",
        "label": "CHAR KALEKHAN"
      },
      {
        "myfilter": "0669",
        "name": "066935",
        "label": "GACHHUA"
      },
      {
        "myfilter": "0669",
        "name": "066947",
        "label": "KAZIR CHAR"
      },
      {
        "myfilter": "0669",
        "name": "066959",
        "label": "MULADI"
      },
      {
        "myfilter": "0669",
        "name": "066971",
        "label": "NAZIRPUR"
      },
      {
        "myfilter": "0669",
        "name": "066983",
        "label": "SAFIPUR"
      },
      {
        "myfilter": "0694",
        "name": "069410",
        "label": "BAMRAIL"
      },
      {
        "myfilter": "0694",
        "name": "069421",
        "label": "BARA KOTHA"
      },
      {
        "myfilter": "0694",
        "name": "069431",
        "label": "GUTHIA"
      },
      {
        "myfilter": "0694",
        "name": "069442",
        "label": "HARTA"
      },
      {
        "myfilter": "0694",
        "name": "069452",
        "label": "JALLA"
      },
      {
        "myfilter": "0694",
        "name": "069463",
        "label": "OTRA"
      },
      {
        "myfilter": "0694",
        "name": "069473",
        "label": "SATLA"
      },
      {
        "myfilter": "0694",
        "name": "069484",
        "label": "SHIKARPUR"
      },
      {
        "myfilter": "0694",
        "name": "069494",
        "label": "SHOLAK"
      },
      {
        "myfilter": "0918",
        "name": "091812",
        "label": "ALINAGAR"
      },
      {
        "myfilter": "0918",
        "name": "091814",
        "label": "BAPTA"
      },
      {
        "myfilter": "0918",
        "name": "091894",
        "label": "BHELU MIAH"
      },
      {
        "myfilter": "0918",
        "name": "091821",
        "label": "CHAR SAMAIA"
      },
      {
        "myfilter": "0918",
        "name": "091829",
        "label": "CHAR SHIBPUR"
      },
      {
        "myfilter": "0918",
        "name": "091880",
        "label": "DAKSHIN DIGHALDI"
      },
      {
        "myfilter": "0918",
        "name": "091836",
        "label": "DHANIA"
      },
      {
        "myfilter": "0918",
        "name": "091851",
        "label": "ILLISHA"
      },
      {
        "myfilter": "0918",
        "name": "091858",
        "label": "KACHIA"
      },
      {
        "myfilter": "0918",
        "name": "091855",
        "label": "PASCHIM ILISHA"
      },
      {
        "myfilter": "0918",
        "name": "091873",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "0918",
        "name": "091865",
        "label": "UTTAR DIGHALDI"
      },
      {
        "myfilter": "0918",
        "name": "091887",
        "label": "VEDURIA"
      },
      {
        "myfilter": "0921",
        "name": "092116",
        "label": "BARA MANIKA"
      },
      {
        "myfilter": "0921",
        "name": "092119",
        "label": "DEULA"
      },
      {
        "myfilter": "0921",
        "name": "092128",
        "label": "GANGAPUR"
      },
      {
        "myfilter": "0921",
        "name": "092138",
        "label": "HASSAN NAGAR"
      },
      {
        "myfilter": "0921",
        "name": "092147",
        "label": "KACHIA"
      },
      {
        "myfilter": "0921",
        "name": "092157",
        "label": "KUTBA"
      },
      {
        "myfilter": "0921",
        "name": "092166",
        "label": "PAKSHIA"
      },
      {
        "myfilter": "0921",
        "name": "092176",
        "label": "SACHRA"
      },
      {
        "myfilter": "0921",
        "name": "092195",
        "label": "TABGI"
      },
      {
        "myfilter": "0925",
        "name": "092513",
        "label": "ABDULLAPUR"
      },
      {
        "myfilter": "0925",
        "name": "092511",
        "label": "ABU BAKARPUR"
      },
      {
        "myfilter": "0925",
        "name": "092514",
        "label": "ADHAKHA NAZRUL NAGAR"
      },
      {
        "myfilter": "0925",
        "name": "092515",
        "label": "AMINABAD"
      },
      {
        "myfilter": "0925",
        "name": "092519",
        "label": "ASLAMPUR"
      },
      {
        "myfilter": "0925",
        "name": "092528",
        "label": "CHAR KALMI"
      },
      {
        "myfilter": "0925",
        "name": "092570",
        "label": "CHAR KUKRI MUKRI"
      },
      {
        "myfilter": "0925",
        "name": "092538",
        "label": "CHAR MADRAS"
      },
      {
        "myfilter": "0925",
        "name": "092547",
        "label": "CHAR MANIKA"
      },
      {
        "myfilter": "0925",
        "name": "092551",
        "label": "DHAL CHAR"
      },
      {
        "myfilter": "0925",
        "name": "092553",
        "label": "EWAJPUR"
      },
      {
        "myfilter": "0925",
        "name": "092557",
        "label": "HAZARIGANJ"
      },
      {
        "myfilter": "0925",
        "name": "092563",
        "label": "JAHANPUR"
      },
      {
        "myfilter": "0925",
        "name": "092566",
        "label": "JINNAGHAR"
      },
      {
        "myfilter": "0925",
        "name": "092573",
        "label": "MUJIBNAGAR"
      },
      {
        "myfilter": "0925",
        "name": "092576",
        "label": "NILKAMAL"
      },
      {
        "myfilter": "0925",
        "name": "092585",
        "label": "NURABAD"
      },
      {
        "myfilter": "0925",
        "name": "092595",
        "label": "OSMANGANJ"
      },
      {
        "myfilter": "0925",
        "name": "092588",
        "label": "RASULPUR"
      },
      {
        "myfilter": "0929",
        "name": "092916",
        "label": "BHABANIPUR"
      },
      {
        "myfilter": "0929",
        "name": "092919",
        "label": "CHAR KHALIFA"
      },
      {
        "myfilter": "0929",
        "name": "092928",
        "label": "CHAR PATA"
      },
      {
        "myfilter": "0929",
        "name": "092985",
        "label": "DAKSHIN JOYNAGAR"
      },
      {
        "myfilter": "0929",
        "name": "092938",
        "label": "HAJIPUR"
      },
      {
        "myfilter": "0929",
        "name": "092947",
        "label": "MADANPUR"
      },
      {
        "myfilter": "0929",
        "name": "092957",
        "label": "MEDUA"
      },
      {
        "myfilter": "0929",
        "name": "092995",
        "label": "SAIDPUR"
      },
      {
        "myfilter": "0929",
        "name": "092976",
        "label": "UTTAR JOYNAGAR"
      },
      {
        "myfilter": "0954",
        "name": "095416",
        "label": "BADARPUR"
      },
      {
        "myfilter": "0954",
        "name": "095419",
        "label": "CHAR BHUTA"
      },
      {
        "myfilter": "0954",
        "name": "095428",
        "label": "DHALI GAURNAGAR"
      },
      {
        "myfilter": "0954",
        "name": "095438",
        "label": "FARAZGANJ"
      },
      {
        "myfilter": "0954",
        "name": "095447",
        "label": "KALMA"
      },
      {
        "myfilter": "0954",
        "name": "095457",
        "label": "LALMOHAN"
      },
      {
        "myfilter": "0954",
        "name": "095466",
        "label": "LORD HARDINJE"
      },
      {
        "myfilter": "0954",
        "name": "095470",
        "label": "PASCHIM CHAR UMED"
      },
      {
        "myfilter": "0954",
        "name": "095476",
        "label": "RAMAGANJ"
      },
      {
        "myfilter": "0965",
        "name": "096521",
        "label": "DAKSHIN SAKUCHIA"
      },
      {
        "myfilter": "0965",
        "name": "096523",
        "label": "HAJIRHAT"
      },
      {
        "myfilter": "0965",
        "name": "096547",
        "label": "MANPURA"
      },
      {
        "myfilter": "0965",
        "name": "096571",
        "label": "UTTAR SAKUCHIA"
      },
      {
        "myfilter": "0991",
        "name": "099119",
        "label": "BARA MALANCHA"
      },
      {
        "myfilter": "0991",
        "name": "099138",
        "label": "CHANCHRA"
      },
      {
        "myfilter": "0991",
        "name": "099157",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "0991",
        "name": "099185",
        "label": "SHAMBHUPUR"
      },
      {
        "myfilter": "0991",
        "name": "099176",
        "label": "SONAPUR"
      },
      {
        "myfilter": "4240",
        "name": "424017",
        "label": "BASANDA"
      },
      {
        "myfilter": "4240",
        "name": "424019",
        "label": "BINOYKATI"
      },
      {
        "myfilter": "4240",
        "name": "424038",
        "label": "GABHA RAMCHANDRAPUR"
      },
      {
        "myfilter": "4240",
        "name": "424028",
        "label": "GABKHAN DHANSIRI"
      },
      {
        "myfilter": "4240",
        "name": "424057",
        "label": "KEORA"
      },
      {
        "myfilter": "4240",
        "name": "424066",
        "label": "KIRTIPASHA"
      },
      {
        "myfilter": "4240",
        "name": "424076",
        "label": "NABAGRAM"
      },
      {
        "myfilter": "4240",
        "name": "424063",
        "label": "NATHULLABAD"
      },
      {
        "myfilter": "4240",
        "name": "424085",
        "label": "PONABALIA"
      },
      {
        "myfilter": "4240",
        "name": "424095",
        "label": "SEKHERHAT"
      },
      {
        "myfilter": "4243",
        "name": "424315",
        "label": "AMUA"
      },
      {
        "myfilter": "4243",
        "name": "424331",
        "label": "AWRABUNIA"
      },
      {
        "myfilter": "4243",
        "name": "424347",
        "label": "CHENCHRI RAMPUR"
      },
      {
        "myfilter": "4243",
        "name": "424363",
        "label": "KANTHALIA"
      },
      {
        "myfilter": "4243",
        "name": "424379",
        "label": "PATKHALGHATA"
      },
      {
        "myfilter": "4243",
        "name": "424394",
        "label": "SAULAJALIA"
      },
      {
        "myfilter": "4273",
        "name": "427313",
        "label": "BHARABPASHA"
      },
      {
        "myfilter": "4273",
        "name": "427315",
        "label": "DAPDAPIA"
      },
      {
        "myfilter": "4273",
        "name": "427321",
        "label": "KULKATI"
      },
      {
        "myfilter": "4273",
        "name": "427331",
        "label": "KUSANGHAL"
      },
      {
        "myfilter": "4273",
        "name": "427342",
        "label": "MAGAR"
      },
      {
        "myfilter": "4273",
        "name": "427336",
        "label": "MOLLAHAT"
      },
      {
        "myfilter": "4273",
        "name": "427352",
        "label": "NACHAN MOHAL"
      },
      {
        "myfilter": "4273",
        "name": "427373",
        "label": "RANAPASHA"
      },
      {
        "myfilter": "4273",
        "name": "427384",
        "label": "SIDDHAKATI"
      },
      {
        "myfilter": "4273",
        "name": "427394",
        "label": "SUBIDPUR"
      },
      {
        "myfilter": "4284",
        "name": "428413",
        "label": "BARAMAIA"
      },
      {
        "myfilter": "4284",
        "name": "428427",
        "label": "GALUA"
      },
      {
        "myfilter": "4284",
        "name": "428440",
        "label": "MATHBARI"
      },
      {
        "myfilter": "4284",
        "name": "428454",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "4284",
        "name": "428467",
        "label": "SATURIA"
      },
      {
        "myfilter": "4284",
        "name": "428481",
        "label": "SUKTAGARH"
      },
      {
        "myfilter": "7838",
        "name": "783810",
        "label": "ADABARIA"
      },
      {
        "myfilter": "7838",
        "name": "783811",
        "label": "BAGA"
      },
      {
        "myfilter": "7838",
        "name": "783829",
        "label": "BAUPHAL"
      },
      {
        "myfilter": "7838",
        "name": "783835",
        "label": "DASPARA"
      },
      {
        "myfilter": "7838",
        "name": "783841",
        "label": "DHULIA"
      },
      {
        "myfilter": "7838",
        "name": "783853",
        "label": "KALAIYA"
      },
      {
        "myfilter": "7838",
        "name": "783859",
        "label": "KALISURI"
      },
      {
        "myfilter": "7838",
        "name": "783865",
        "label": "KANAKDIA"
      },
      {
        "myfilter": "7838",
        "name": "783847",
        "label": "KANCHI PARA"
      },
      {
        "myfilter": "7838",
        "name": "783871",
        "label": "KESHABPUR"
      },
      {
        "myfilter": "7838",
        "name": "783877",
        "label": "MADANPURA"
      },
      {
        "myfilter": "7838",
        "name": "783889",
        "label": "NAZIRPUR"
      },
      {
        "myfilter": "7838",
        "name": "783883",
        "label": "NOAMALA"
      },
      {
        "myfilter": "7838",
        "name": "783895",
        "label": "SURJYAMANI"
      },
      {
        "myfilter": "7852",
        "name": "785210",
        "label": "ALIPUR"
      },
      {
        "myfilter": "7852",
        "name": "785221",
        "label": "BAHRAMPUR"
      },
      {
        "myfilter": "7852",
        "name": "785231",
        "label": "BANSHBARIA"
      },
      {
        "myfilter": "7852",
        "name": "785242",
        "label": "BETAGI SANKIPURA"
      },
      {
        "myfilter": "7852",
        "name": "785252",
        "label": "DASHMINA"
      },
      {
        "myfilter": "7852",
        "name": "785284",
        "label": "RANGOPALDI"
      },
      {
        "myfilter": "7855",
        "name": "785519",
        "label": "ANGARIA"
      },
      {
        "myfilter": "7855",
        "name": "785547",
        "label": "LEBUKHALI"
      },
      {
        "myfilter": "7855",
        "name": "785581",
        "label": "MURADIA"
      },
      {
        "myfilter": "7855",
        "name": "785588",
        "label": "PANGASHIA"
      },
      {
        "myfilter": "7855",
        "name": "785593",
        "label": "SREERAMPUR"
      },
      {
        "myfilter": "7857",
        "name": "785711",
        "label": "AMKHOLA"
      },
      {
        "myfilter": "7857",
        "name": "785722",
        "label": "BAKULBARIA"
      },
      {
        "myfilter": "7857",
        "name": "785737",
        "label": "CHAR BISWAS"
      },
      {
        "myfilter": "7857",
        "name": "785739",
        "label": "CHAR KAJAL"
      },
      {
        "myfilter": "7857",
        "name": "785750",
        "label": "CHIKNIKANDI"
      },
      {
        "myfilter": "7857",
        "name": "785755",
        "label": "DAKUA"
      },
      {
        "myfilter": "7857",
        "name": "785767",
        "label": "GALACHIPA"
      },
      {
        "myfilter": "7857",
        "name": "785769",
        "label": "GAZALIA"
      },
      {
        "myfilter": "7857",
        "name": "785772",
        "label": "GOLKHALI"
      },
      {
        "myfilter": "7857",
        "name": "785775",
        "label": "KALAGACHHIA"
      },
      {
        "myfilter": "7857",
        "name": "785778",
        "label": "PANPATTY"
      },
      {
        "myfilter": "7857",
        "name": "785794",
        "label": "RATANDI TALTALI"
      },
      {
        "myfilter": "7866",
        "name": "786610",
        "label": "BALIATALI"
      },
      {
        "myfilter": "7866",
        "name": "786611",
        "label": "CHAKAMAIYA"
      },
      {
        "myfilter": "7866",
        "name": "786613",
        "label": "CHAMPAPUR"
      },
      {
        "myfilter": "7866",
        "name": "786615",
        "label": "DALBUGANJ"
      },
      {
        "myfilter": "7866",
        "name": "786655",
        "label": "DHANKHALI"
      },
      {
        "myfilter": "7866",
        "name": "786629",
        "label": "DHULASAR"
      },
      {
        "myfilter": "7866",
        "name": "786635",
        "label": "LALUA"
      },
      {
        "myfilter": "7866",
        "name": "786647",
        "label": "LATA CHAPLI"
      },
      {
        "myfilter": "7866",
        "name": "786659",
        "label": "MITHAGANJ"
      },
      {
        "myfilter": "7866",
        "name": "786623",
        "label": "MOHIPUR"
      },
      {
        "myfilter": "7866",
        "name": "786671",
        "label": "NILGANJ"
      },
      {
        "myfilter": "7866",
        "name": "786683",
        "label": "TIAKHALI"
      },
      {
        "myfilter": "7876",
        "name": "787613",
        "label": "AMRAGACHHIA"
      },
      {
        "myfilter": "7876",
        "name": "787627",
        "label": "DEULI SUBIDKHALI"
      },
      {
        "myfilter": "7876",
        "name": "787640",
        "label": "KAKRABUNIA"
      },
      {
        "myfilter": "7876",
        "name": "787654",
        "label": "MADHABKHALI"
      },
      {
        "myfilter": "7876",
        "name": "787667",
        "label": "MAJIDBARI"
      },
      {
        "myfilter": "7876",
        "name": "787681",
        "label": "MIRZAGANJ"
      },
      {
        "myfilter": "7895",
        "name": "789510",
        "label": "AULIAPUR"
      },
      {
        "myfilter": "7895",
        "name": "789511",
        "label": "BADARPUR"
      },
      {
        "myfilter": "7895",
        "name": "789531",
        "label": "BARA BIGHAI"
      },
      {
        "myfilter": "7895",
        "name": "789513",
        "label": "CHHOTA BIGHAI"
      },
      {
        "myfilter": "7895",
        "name": "789520",
        "label": "ITABARIA"
      },
      {
        "myfilter": "7895",
        "name": "789527",
        "label": "JAINKATI"
      },
      {
        "myfilter": "7895",
        "name": "789533",
        "label": "KALIKAPUR"
      },
      {
        "myfilter": "7895",
        "name": "789540",
        "label": "KAMALAPUR"
      },
      {
        "myfilter": "7895",
        "name": "789561",
        "label": "LAUKATI"
      },
      {
        "myfilter": "7895",
        "name": "789554",
        "label": "LOHALIA"
      },
      {
        "myfilter": "7895",
        "name": "789567",
        "label": "MADARBUNIA"
      },
      {
        "myfilter": "7895",
        "name": "789574",
        "label": "MARICHBUNIA"
      },
      {
        "myfilter": "7897",
        "name": "789727",
        "label": "BARA BAISDIA"
      },
      {
        "myfilter": "7897",
        "name": "789732",
        "label": "CHALITABUNIA"
      },
      {
        "myfilter": "7897",
        "name": "789734",
        "label": "CHAR MONTAZ"
      },
      {
        "myfilter": "7897",
        "name": "789744",
        "label": "CHHOTA BAISDIA"
      },
      {
        "myfilter": "7897",
        "name": "789783",
        "label": "RANGABALI"
      },
      {
        "myfilter": "7914",
        "name": "791411",
        "label": "BHANDARIA"
      },
      {
        "myfilter": "7914",
        "name": "791423",
        "label": "BHITABARIA"
      },
      {
        "myfilter": "7914",
        "name": "791435",
        "label": "DHAOA"
      },
      {
        "myfilter": "7914",
        "name": "791447",
        "label": "GAURIPUR"
      },
      {
        "myfilter": "7914",
        "name": "791459",
        "label": "IKRI"
      },
      {
        "myfilter": "7914",
        "name": "791471",
        "label": "NUDMULLA"
      },
      {
        "myfilter": "7914",
        "name": "791483",
        "label": "TELIKHALI"
      },
      {
        "myfilter": "7947",
        "name": "794715",
        "label": "AMRAJURI"
      },
      {
        "myfilter": "7947",
        "name": "794731",
        "label": "CHIRA PARA PARSATURIA"
      },
      {
        "myfilter": "7947",
        "name": "794747",
        "label": "KAWKHALI"
      },
      {
        "myfilter": "7947",
        "name": "794763",
        "label": "SAYNA RAGHUNATHPUR"
      },
      {
        "myfilter": "7947",
        "name": "794779",
        "label": "SHIALKATI"
      },
      {
        "myfilter": "7958",
        "name": "795815",
        "label": "AMRAGACHHIA"
      },
      {
        "myfilter": "7958",
        "name": "795817",
        "label": "BARA MACHHUA"
      },
      {
        "myfilter": "7958",
        "name": "795825",
        "label": "BETMORE RAJPARA"
      },
      {
        "myfilter": "7958",
        "name": "795834",
        "label": "DAUDKHALI"
      },
      {
        "myfilter": "7958",
        "name": "795843",
        "label": "DHANISAFA"
      },
      {
        "myfilter": "7958",
        "name": "795851",
        "label": "GULISHAKHALI"
      },
      {
        "myfilter": "7958",
        "name": "795860",
        "label": "MATHBARIA"
      },
      {
        "myfilter": "7958",
        "name": "795869",
        "label": "MIRUKHALI"
      },
      {
        "myfilter": "7958",
        "name": "795877",
        "label": "SAPLEZA"
      },
      {
        "myfilter": "7958",
        "name": "795886",
        "label": "TIKIKATA"
      },
      {
        "myfilter": "7958",
        "name": "795894",
        "label": "TUSHKHALI"
      },
      {
        "myfilter": "7976",
        "name": "797621",
        "label": "DEULBARI DOBRA"
      },
      {
        "myfilter": "7976",
        "name": "797610",
        "label": "DIRGHA UNION"
      },
      {
        "myfilter": "7976",
        "name": "797625",
        "label": "KOLARDOANIA"
      },
      {
        "myfilter": "7976",
        "name": "797631",
        "label": "MALIKHALI"
      },
      {
        "myfilter": "7976",
        "name": "797642",
        "label": "MATIBHANGA"
      },
      {
        "myfilter": "7976",
        "name": "797652",
        "label": "NAZIRPUR"
      },
      {
        "myfilter": "7976",
        "name": "797663",
        "label": "SEKHMATIA"
      },
      {
        "myfilter": "7976",
        "name": "797673",
        "label": "SHANKHARIKATI"
      },
      {
        "myfilter": "7976",
        "name": "797684",
        "label": "SREERAMKATI UNION"
      },
      {
        "myfilter": "7987",
        "name": "798717",
        "label": "ATGHAR KURIANA UNION"
      },
      {
        "myfilter": "7987",
        "name": "798719",
        "label": "BALDIA"
      },
      {
        "myfilter": "7987",
        "name": "798728",
        "label": "DAIHARI"
      },
      {
        "myfilter": "7987",
        "name": "798738",
        "label": "GUAREKHA UNION"
      },
      {
        "myfilter": "7987",
        "name": "798747",
        "label": "JALABARI"
      },
      {
        "myfilter": "7987",
        "name": "798795",
        "label": "NESARABAD (SWARUPKATI)"
      },
      {
        "myfilter": "7987",
        "name": "798757",
        "label": "SAMUDAYKATI"
      },
      {
        "myfilter": "7987",
        "name": "798766",
        "label": "SARENGKATI"
      },
      {
        "myfilter": "7987",
        "name": "798776",
        "label": "SOHAGDAL"
      },
      {
        "myfilter": "7987",
        "name": "798785",
        "label": "SUTIAKATI"
      },
      {
        "myfilter": "7980",
        "name": "798017",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "7980",
        "name": "798025",
        "label": "KADAMTALA UNION"
      },
      {
        "myfilter": "7980",
        "name": "798034",
        "label": "KALAKHALI"
      },
      {
        "myfilter": "7980",
        "name": "798077",
        "label": "SARIKTALA DUMRITALA"
      },
      {
        "myfilter": "7980",
        "name": "798069",
        "label": "SHANKARPASHA"
      },
      {
        "myfilter": "7980",
        "name": "798086",
        "label": "SIKDAR MALLIK"
      },
      {
        "myfilter": "7980",
        "name": "798094",
        "label": "TONA"
      },
      {
        "myfilter": "7990",
        "name": "799015",
        "label": "BALI PARA"
      },
      {
        "myfilter": "7990",
        "name": "799043",
        "label": "PARERHAT"
      },
      {
        "myfilter": "7990",
        "name": "799051",
        "label": "PATTASHI"
      },
      {
        "myfilter": "0304",
        "name": "030431",
        "label": "ALIKADAM"
      },
      {
        "myfilter": "0304",
        "name": "030463",
        "label": "CHOKHYONG"
      },
      {
        "myfilter": "0314",
        "name": "031415",
        "label": "BANDARBAN"
      },
      {
        "myfilter": "0314",
        "name": "031431",
        "label": "KUHALONG"
      },
      {
        "myfilter": "0314",
        "name": "031447",
        "label": "RAJBILA"
      },
      {
        "myfilter": "0314",
        "name": "031463",
        "label": "SUWALAK"
      },
      {
        "myfilter": "0314",
        "name": "031479",
        "label": "TANKABATI"
      },
      {
        "myfilter": "0351",
        "name": "035115",
        "label": "AZIZNAGAR"
      },
      {
        "myfilter": "0351",
        "name": "035127",
        "label": "FAITANG"
      },
      {
        "myfilter": "0351",
        "name": "035131",
        "label": "FASYAKHALI"
      },
      {
        "myfilter": "0351",
        "name": "035147",
        "label": "GAJALIA"
      },
      {
        "myfilter": "0351",
        "name": "035163",
        "label": "LAMA"
      },
      {
        "myfilter": "0351",
        "name": "035168",
        "label": "RUPSHIPARA"
      },
      {
        "myfilter": "0351",
        "name": "035179",
        "label": "SARAI"
      },
      {
        "myfilter": "0373",
        "name": "037319",
        "label": "BAISHARI"
      },
      {
        "myfilter": "0373",
        "name": "037338",
        "label": "DOCHHARI"
      },
      {
        "myfilter": "0373",
        "name": "037357",
        "label": "GHUMDUM"
      },
      {
        "myfilter": "0373",
        "name": "037376",
        "label": "NAIKHONGCHHARI"
      },
      {
        "myfilter": "0373",
        "name": "037387",
        "label": "SONAICHHARI"
      },
      {
        "myfilter": "0389",
        "name": "038919",
        "label": "ALIKHONG"
      },
      {
        "myfilter": "0389",
        "name": "038938",
        "label": "NOWA PATANG"
      },
      {
        "myfilter": "0389",
        "name": "038957",
        "label": "ROWANGCHHARI"
      },
      {
        "myfilter": "0389",
        "name": "038976",
        "label": "TARACHHA"
      },
      {
        "myfilter": "0391",
        "name": "039119",
        "label": "GHALANGYA"
      },
      {
        "myfilter": "0391",
        "name": "039138",
        "label": "PAINDU"
      },
      {
        "myfilter": "0391",
        "name": "039157",
        "label": "REMAKRI PRANSA"
      },
      {
        "myfilter": "0391",
        "name": "039176",
        "label": "RUMA"
      },
      {
        "myfilter": "0395",
        "name": "039519",
        "label": "BALIPARA"
      },
      {
        "myfilter": "0395",
        "name": "039538",
        "label": "REMAKRY"
      },
      {
        "myfilter": "0395",
        "name": "039557",
        "label": "THANCHI"
      },
      {
        "myfilter": "0395",
        "name": "039576",
        "label": "TINDU"
      },
      {
        "myfilter": "1202",
        "name": "120219",
        "label": "DAKSHIN AKHAURA"
      },
      {
        "myfilter": "1202",
        "name": "120257",
        "label": "DHARKHAR"
      },
      {
        "myfilter": "1202",
        "name": "120276",
        "label": "MANIAND"
      },
      {
        "myfilter": "1202",
        "name": "120285",
        "label": "MOGRA"
      },
      {
        "myfilter": "1202",
        "name": "120290",
        "label": "UTTAR AKHAURA"
      },
      {
        "myfilter": "1233",
        "name": "123312",
        "label": "ARAISIDHA"
      },
      {
        "myfilter": "1233",
        "name": "123314",
        "label": "ASHUGANG"
      },
      {
        "myfilter": "1233",
        "name": "123326",
        "label": "CHAR CHARTALA"
      },
      {
        "myfilter": "1233",
        "name": "123338",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "1233",
        "name": "123342",
        "label": "LALPUR"
      },
      {
        "myfilter": "1233",
        "name": "123374",
        "label": "PASCHIM TALSAHAR"
      },
      {
        "myfilter": "1233",
        "name": "123377",
        "label": "SHARIFPUR"
      },
      {
        "myfilter": "1233",
        "name": "123383",
        "label": "TARUA"
      },
      {
        "myfilter": "1204",
        "name": "120414",
        "label": "AYUBPUR"
      },
      {
        "myfilter": "1204",
        "name": "120494",
        "label": "BANCHHARAMPUR"
      },
      {
        "myfilter": "1204",
        "name": "120423",
        "label": "DARIADAULAT"
      },
      {
        "myfilter": "1204",
        "name": "120459",
        "label": "DARIKANDI"
      },
      {
        "myfilter": "1204",
        "name": "120468",
        "label": "FARDABAD"
      },
      {
        "myfilter": "1204",
        "name": "120454",
        "label": "MANIKPUR"
      },
      {
        "myfilter": "1204",
        "name": "120430",
        "label": "PAHARIAKANDI"
      },
      {
        "myfilter": "1204",
        "name": "120445",
        "label": "RUPASDI"
      },
      {
        "myfilter": "1204",
        "name": "120436",
        "label": "SAIFULLAKANDI"
      },
      {
        "myfilter": "1204",
        "name": "120481",
        "label": "SALIMABAD"
      },
      {
        "myfilter": "1204",
        "name": "120483",
        "label": "SONARAMPUR"
      },
      {
        "myfilter": "1204",
        "name": "120488",
        "label": "TEZKHALI"
      },
      {
        "myfilter": "1204",
        "name": "120477",
        "label": "UJAN CHAR"
      },
      {
        "myfilter": "1207",
        "name": "120796",
        "label": "BISHNUPUR"
      },
      {
        "myfilter": "1207",
        "name": "120728",
        "label": "BUDHANTI"
      },
      {
        "myfilter": "1207",
        "name": "120743",
        "label": "CHAMPAKNAGAR"
      },
      {
        "myfilter": "1207",
        "name": "120732",
        "label": "CHANDURA"
      },
      {
        "myfilter": "1207",
        "name": "120736",
        "label": "CHAR ISLMAPUR"
      },
      {
        "myfilter": "1207",
        "name": "120752",
        "label": "DAKSHIN SINGERBIL"
      },
      {
        "myfilter": "1207",
        "name": "120756",
        "label": "HARASHPUR"
      },
      {
        "myfilter": "1207",
        "name": "120766",
        "label": "PAHARPUR"
      },
      {
        "myfilter": "1207",
        "name": "120772",
        "label": "PATTAN"
      },
      {
        "myfilter": "1207",
        "name": "120791",
        "label": "UTTAR ICHHAPUR"
      },
      {
        "myfilter": "1213",
        "name": "121317",
        "label": "BASUDEB"
      },
      {
        "myfilter": "1213",
        "name": "121394",
        "label": "BUDHAL"
      },
      {
        "myfilter": "1213",
        "name": "121348",
        "label": "DAKSHIN NATAI"
      },
      {
        "myfilter": "1213",
        "name": "121359",
        "label": "MACHHIHATA"
      },
      {
        "myfilter": "1213",
        "name": "121361",
        "label": "MAJLISHPUR"
      },
      {
        "myfilter": "1213",
        "name": "121381",
        "label": "PURBA TALSAHAR"
      },
      {
        "myfilter": "1213",
        "name": "121383",
        "label": "RAMRAIL"
      },
      {
        "myfilter": "1213",
        "name": "121386",
        "label": "SADEKPUR"
      },
      {
        "myfilter": "1213",
        "name": "121350",
        "label": "SHUHILPUR"
      },
      {
        "myfilter": "1213",
        "name": "121388",
        "label": "SULTANPUR"
      },
      {
        "myfilter": "1213",
        "name": "121393",
        "label": "UTTAR NATAI"
      },
      {
        "myfilter": "1263",
        "name": "126318",
        "label": "BADAIR"
      },
      {
        "myfilter": "1263",
        "name": "126331",
        "label": "BAYEK"
      },
      {
        "myfilter": "1263",
        "name": "126337",
        "label": "BINAUTI"
      },
      {
        "myfilter": "1263",
        "name": "126350",
        "label": "GOPINATHPUR"
      },
      {
        "myfilter": "1263",
        "name": "126356",
        "label": "KAIMPUR"
      },
      {
        "myfilter": "1263",
        "name": "126363",
        "label": "KASBA PASCHIM"
      },
      {
        "myfilter": "1263",
        "name": "126365",
        "label": "KHERERA"
      },
      {
        "myfilter": "1263",
        "name": "126369",
        "label": "KUTI"
      },
      {
        "myfilter": "1263",
        "name": "126382",
        "label": "MEHARI"
      },
      {
        "myfilter": "1263",
        "name": "126394",
        "label": "MULGRAM"
      },
      {
        "myfilter": "1285",
        "name": "128581",
        "label": "BARAIL"
      },
      {
        "myfilter": "1285",
        "name": "128512",
        "label": "BARIKANDI"
      },
      {
        "myfilter": "1285",
        "name": "128513",
        "label": "BIDDYAKUT"
      },
      {
        "myfilter": "1285",
        "name": "128518",
        "label": "BIRGAON"
      },
      {
        "myfilter": "1285",
        "name": "128522",
        "label": "BITGHAR (TIARA)"
      },
      {
        "myfilter": "1285",
        "name": "128527",
        "label": "IBRAHIMPUR"
      },
      {
        "myfilter": "1285",
        "name": "128536",
        "label": "JUNEDPUR"
      },
      {
        "myfilter": "1285",
        "name": "128540",
        "label": "KAITALA DAKSHIN"
      },
      {
        "myfilter": "1285",
        "name": "128542",
        "label": "KAITALA UTTAR"
      },
      {
        "myfilter": "1285",
        "name": "128545",
        "label": "KRISHNANAGAR"
      },
      {
        "myfilter": "1285",
        "name": "128547",
        "label": "LAUR FATEHPUR"
      },
      {
        "myfilter": "1285",
        "name": "128558",
        "label": "NATGHAR"
      },
      {
        "myfilter": "1285",
        "name": "128560",
        "label": "PASCHIM NABINAGAR"
      },
      {
        "myfilter": "1285",
        "name": "128562",
        "label": "PURBA NABINAGAR"
      },
      {
        "myfilter": "1285",
        "name": "128567",
        "label": "RASULLABAD"
      },
      {
        "myfilter": "1285",
        "name": "128572",
        "label": "RATANPUR"
      },
      {
        "myfilter": "1285",
        "name": "128575",
        "label": "SALIMGANJ"
      },
      {
        "myfilter": "1285",
        "name": "128583",
        "label": "SATMURA"
      },
      {
        "myfilter": "1285",
        "name": "128586",
        "label": "SHIBPUR"
      },
      {
        "myfilter": "1285",
        "name": "128588",
        "label": "SHYAMGRAM"
      },
      {
        "myfilter": "1285",
        "name": "128590",
        "label": "SREERAMPUR"
      },
      {
        "myfilter": "1290",
        "name": "129017",
        "label": "BOLAKOT"
      },
      {
        "myfilter": "1290",
        "name": "129014",
        "label": "BURISHWAR"
      },
      {
        "myfilter": "1290",
        "name": "129021",
        "label": "CHAPARTALA"
      },
      {
        "myfilter": "1290",
        "name": "129029",
        "label": "CHATALPAR"
      },
      {
        "myfilter": "1290",
        "name": "129036",
        "label": "DHAR MANDAL"
      },
      {
        "myfilter": "1290",
        "name": "129043",
        "label": "FANDAUK"
      },
      {
        "myfilter": "1290",
        "name": "129051",
        "label": "GOALNAGAR"
      },
      {
        "myfilter": "1290",
        "name": "129058",
        "label": "GOKARNA"
      },
      {
        "myfilter": "1290",
        "name": "129065",
        "label": "GUNIAK"
      },
      {
        "myfilter": "1290",
        "name": "129073",
        "label": "HARIPUR"
      },
      {
        "myfilter": "1290",
        "name": "129080",
        "label": "KUNDA"
      },
      {
        "myfilter": "1290",
        "name": "129087",
        "label": "NASIRNAGAR"
      },
      {
        "myfilter": "1290",
        "name": "129094",
        "label": "PURBABAGH"
      },
      {
        "myfilter": "1294",
        "name": "129413",
        "label": "AORAIL"
      },
      {
        "myfilter": "1294",
        "name": "129419",
        "label": "CHUNTA"
      },
      {
        "myfilter": "1294",
        "name": "129428",
        "label": "KALIKACHCHHA"
      },
      {
        "myfilter": "1294",
        "name": "129438",
        "label": "NOAGAON"
      },
      {
        "myfilter": "1294",
        "name": "129447",
        "label": "PAK SHIMUL"
      },
      {
        "myfilter": "1294",
        "name": "129476",
        "label": "SARAIL"
      },
      {
        "myfilter": "1294",
        "name": "129485",
        "label": "SHAHBAZPUR"
      },
      {
        "myfilter": "1294",
        "name": "129490",
        "label": "SHAHJADAPUR"
      },
      {
        "myfilter": "1294",
        "name": "129494",
        "label": "UTTAR PANISAR"
      },
      {
        "myfilter": "1322",
        "name": "132218",
        "label": "ASHIKATI"
      },
      {
        "myfilter": "1322",
        "name": "132222",
        "label": "BAGHADI"
      },
      {
        "myfilter": "1322",
        "name": "132227",
        "label": "BALIA"
      },
      {
        "myfilter": "1322",
        "name": "132231",
        "label": "BISHNUPUR"
      },
      {
        "myfilter": "1322",
        "name": "132254",
        "label": "CHANDRA"
      },
      {
        "myfilter": "1322",
        "name": "132258",
        "label": "HANAR CHAR"
      },
      {
        "myfilter": "1322",
        "name": "132263",
        "label": "IBRAHIMPUR"
      },
      {
        "myfilter": "1322",
        "name": "132220",
        "label": "KALYANPUR"
      },
      {
        "myfilter": "1322",
        "name": "132290",
        "label": "LAKSHMIPUR MODEL"
      },
      {
        "myfilter": "1322",
        "name": "132267",
        "label": "MAISHADI"
      },
      {
        "myfilter": "1322",
        "name": "132276",
        "label": "RAJRAJESHWAR"
      },
      {
        "myfilter": "1322",
        "name": "132285",
        "label": "RAMPUR"
      },
      {
        "myfilter": "1322",
        "name": "132281",
        "label": "SHAH MAHMUDPUR"
      },
      {
        "myfilter": "1322",
        "name": "132294",
        "label": "TARPUR CHANDI"
      },
      {
        "myfilter": "1345",
        "name": "134535",
        "label": "DAKSHIN FARIDGANJ"
      },
      {
        "myfilter": "1345",
        "name": "134547",
        "label": "DAKSHIN GOBINDAPUR"
      },
      {
        "myfilter": "1345",
        "name": "134571",
        "label": "DAKSHIN PAIK PARA"
      },
      {
        "myfilter": "1345",
        "name": "134583",
        "label": "DAKSHIN RUPSA"
      },
      {
        "myfilter": "1345",
        "name": "134511",
        "label": "PASCHIM BALUTHUPA"
      },
      {
        "myfilter": "1345",
        "name": "134523",
        "label": "PASCHIM CHAR DUKHIA"
      },
      {
        "myfilter": "1345",
        "name": "134559",
        "label": "PASCHIM GUPTI"
      },
      {
        "myfilter": "1345",
        "name": "134595",
        "label": "PASCHIM SUBIDPUR"
      },
      {
        "myfilter": "1345",
        "name": "134513",
        "label": "PURBA BALUTHUPA"
      },
      {
        "myfilter": "1345",
        "name": "134517",
        "label": "PURBA CHAR DUKHIA"
      },
      {
        "myfilter": "1345",
        "name": "134553",
        "label": "PURBA GUPTI"
      },
      {
        "myfilter": "1345",
        "name": "134589",
        "label": "PURBA SUBIDPUR"
      },
      {
        "myfilter": "1345",
        "name": "134541",
        "label": "UTTAR GOBINDAPUR"
      },
      {
        "myfilter": "1345",
        "name": "134565",
        "label": "UTTAR PAIKPARA"
      },
      {
        "myfilter": "1345",
        "name": "134577",
        "label": "UTTAR RUPSA"
      },
      {
        "myfilter": "1347",
        "name": "134735",
        "label": "CHAR BHAIRABI"
      },
      {
        "myfilter": "1347",
        "name": "134723",
        "label": "DAKSHIN ALGI DURGAPUR"
      },
      {
        "myfilter": "1347",
        "name": "134759",
        "label": "GAZIPUR"
      },
      {
        "myfilter": "1347",
        "name": "134747",
        "label": "HAIM CHAR"
      },
      {
        "myfilter": "1347",
        "name": "134771",
        "label": "NILKAMAL"
      },
      {
        "myfilter": "1347",
        "name": "134711",
        "label": "UTTAR ALGI DURGAPUR"
      },
      {
        "myfilter": "1349",
        "name": "134975",
        "label": "BAKILA"
      },
      {
        "myfilter": "1349",
        "name": "134930",
        "label": "DAKSHIN GANDHARBAPUR"
      },
      {
        "myfilter": "1349",
        "name": "134955",
        "label": "DAKSHIN KALOCHO"
      },
      {
        "myfilter": "1349",
        "name": "134935",
        "label": "HAJIGANJ"
      },
      {
        "myfilter": "1349",
        "name": "134965",
        "label": "HATILA PURBA"
      },
      {
        "myfilter": "1349",
        "name": "134960",
        "label": "PACHIM HATILA"
      },
      {
        "myfilter": "1349",
        "name": "134920",
        "label": "PASCHIM BARKUL"
      },
      {
        "myfilter": "1349",
        "name": "134918",
        "label": "PURBA BARKUL"
      },
      {
        "myfilter": "1349",
        "name": "134925",
        "label": "UTTAR GANDHARABPUR"
      },
      {
        "myfilter": "1349",
        "name": "134950",
        "label": "UTTAR KALOCHO"
      },
      {
        "myfilter": "1349",
        "name": "134970",
        "label": "UTTAR RAJARGAON"
      },
      {
        "myfilter": "1358",
        "name": "135813",
        "label": "ASHRAFPUR"
      },
      {
        "myfilter": "1358",
        "name": "135815",
        "label": "BITARA"
      },
      {
        "myfilter": "1358",
        "name": "135831",
        "label": "DAKSHIN GOHAT"
      },
      {
        "myfilter": "1358",
        "name": "135847",
        "label": "DAKSHIN KACHUA"
      },
      {
        "myfilter": "1358",
        "name": "135855",
        "label": "KADLA"
      },
      {
        "myfilter": "1358",
        "name": "135863",
        "label": "KARAIA"
      },
      {
        "myfilter": "1358",
        "name": "135894",
        "label": "PASCHIM SAHADEBPUR"
      },
      {
        "myfilter": "1358",
        "name": "135879",
        "label": "PATHAIR"
      },
      {
        "myfilter": "1358",
        "name": "135887",
        "label": "PURBA SAHADEBPUR"
      },
      {
        "myfilter": "1358",
        "name": "135871",
        "label": "SACHAR"
      },
      {
        "myfilter": "1358",
        "name": "135823",
        "label": "UTTAR GOHAT"
      },
      {
        "myfilter": "1358",
        "name": "135839",
        "label": "UTTAR KACHUA"
      },
      {
        "myfilter": "1376",
        "name": "137682",
        "label": "DAKHSIN NAYERGAON"
      },
      {
        "myfilter": "1376",
        "name": "137686",
        "label": "DAKSHIN UPADI"
      },
      {
        "myfilter": "1376",
        "name": "137634",
        "label": "KHADERGAON"
      },
      {
        "myfilter": "1376",
        "name": "137643",
        "label": "NARAYANPUR"
      },
      {
        "myfilter": "1376",
        "name": "137656",
        "label": "UTTAR NAYERGAON"
      },
      {
        "myfilter": "1376",
        "name": "137660",
        "label": "UTTAR UPADI"
      },
      {
        "myfilter": "1379",
        "name": "137911",
        "label": "BAGANBARI"
      },
      {
        "myfilter": "1379",
        "name": "137915",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "1379",
        "name": "137921",
        "label": "EKLASPUR"
      },
      {
        "myfilter": "1379",
        "name": "137913",
        "label": "FARAJIKANDI"
      },
      {
        "myfilter": "1379",
        "name": "137923",
        "label": "GAJRA"
      },
      {
        "myfilter": "1379",
        "name": "137925",
        "label": "ISLAMABAD"
      },
      {
        "myfilter": "1379",
        "name": "137930",
        "label": "JAHIRABAD"
      },
      {
        "myfilter": "1379",
        "name": "137932",
        "label": "KALAKANDA"
      },
      {
        "myfilter": "1379",
        "name": "137938",
        "label": "MOHANPUR"
      },
      {
        "myfilter": "1379",
        "name": "137994",
        "label": "PASCHIM FATEHPUR"
      },
      {
        "myfilter": "1379",
        "name": "137917",
        "label": "PURBA FATEHPUR"
      },
      {
        "myfilter": "1379",
        "name": "137964",
        "label": "SADULLAPUR"
      },
      {
        "myfilter": "1379",
        "name": "137973",
        "label": "SATNAL"
      },
      {
        "myfilter": "1379",
        "name": "137990",
        "label": "SULTANABAD"
      },
      {
        "myfilter": "1395",
        "name": "139565",
        "label": "DAKSHIN MEHER"
      },
      {
        "myfilter": "1395",
        "name": "139582",
        "label": "DAKSHIN ROYSREE"
      },
      {
        "myfilter": "1395",
        "name": "139590",
        "label": "DAKSHIN SUCHI PARA"
      },
      {
        "myfilter": "1395",
        "name": "139515",
        "label": "EAST CHITASI"
      },
      {
        "myfilter": "1395",
        "name": "139595",
        "label": "TAMTA DAKSHIN"
      },
      {
        "myfilter": "1395",
        "name": "139596",
        "label": "TAMTA UTTAR"
      },
      {
        "myfilter": "1395",
        "name": "139560",
        "label": "UTTAR MEHER"
      },
      {
        "myfilter": "1395",
        "name": "139580",
        "label": "UTTAR ROYSREE"
      },
      {
        "myfilter": "1395",
        "name": "139585",
        "label": "UTTAR SUCHI PARA"
      },
      {
        "myfilter": "1395",
        "name": "139520",
        "label": "WEST CHITASI"
      },
      {
        "myfilter": "1504",
        "name": "150415",
        "label": "ANOWARA"
      },
      {
        "myfilter": "1504",
        "name": "150419",
        "label": "BAIRAG (PART)"
      },
      {
        "myfilter": "1504",
        "name": "150428",
        "label": "BARAKHAIN"
      },
      {
        "myfilter": "1504",
        "name": "150438",
        "label": "BARASAT"
      },
      {
        "myfilter": "1504",
        "name": "150457",
        "label": "BATTALI"
      },
      {
        "myfilter": "1504",
        "name": "150447",
        "label": "BURUMCHHARA"
      },
      {
        "myfilter": "1504",
        "name": "150466",
        "label": "CHATARI"
      },
      {
        "myfilter": "1504",
        "name": "150476",
        "label": "HAILDHAR"
      },
      {
        "myfilter": "1504",
        "name": "150481",
        "label": "JUIDANDI"
      },
      {
        "myfilter": "1504",
        "name": "150485",
        "label": "PARAIKORA"
      },
      {
        "myfilter": "1504",
        "name": "150495",
        "label": "ROYPUR"
      },
      {
        "myfilter": "1508",
        "name": "150811",
        "label": "BAHARCHHARA"
      },
      {
        "myfilter": "1508",
        "name": "150812",
        "label": "BAILCHHARI"
      },
      {
        "myfilter": "1508",
        "name": "150818",
        "label": "CHAMBAL"
      },
      {
        "myfilter": "1508",
        "name": "150825",
        "label": "CHHANUA"
      },
      {
        "myfilter": "1508",
        "name": "150831",
        "label": "GANDAMARA"
      },
      {
        "myfilter": "1508",
        "name": "150844",
        "label": "KALIPUR"
      },
      {
        "myfilter": "1508",
        "name": "150850",
        "label": "KATHARIA"
      },
      {
        "myfilter": "1508",
        "name": "150856",
        "label": "KHANKHANABAD"
      },
      {
        "myfilter": "1508",
        "name": "150863",
        "label": "PUICHHARI"
      },
      {
        "myfilter": "1508",
        "name": "150869",
        "label": "PUKURIA"
      },
      {
        "myfilter": "1508",
        "name": "150875",
        "label": "SADHANPUR"
      },
      {
        "myfilter": "1508",
        "name": "150882",
        "label": "SARAL"
      },
      {
        "myfilter": "1508",
        "name": "150888",
        "label": "SEKHERKHIL"
      },
      {
        "myfilter": "1508",
        "name": "150894",
        "label": "SILKUP"
      },
      {
        "myfilter": "1512",
        "name": "151217",
        "label": "AHLA KARALDANGA"
      },
      {
        "myfilter": "1512",
        "name": "151219",
        "label": "AMUCHIA"
      },
      {
        "myfilter": "1512",
        "name": "151228",
        "label": "CHARANDWIP"
      },
      {
        "myfilter": "1512",
        "name": "151247",
        "label": "KANDHURKHIL"
      },
      {
        "myfilter": "1512",
        "name": "151250",
        "label": "PASCHIM GOMDANDI"
      },
      {
        "myfilter": "1512",
        "name": "151257",
        "label": "POPADIA"
      },
      {
        "myfilter": "1512",
        "name": "151238",
        "label": "PURBA GOMDANDI"
      },
      {
        "myfilter": "1512",
        "name": "151276",
        "label": "SAKPURA"
      },
      {
        "myfilter": "1512",
        "name": "151266",
        "label": "SAROATALI"
      },
      {
        "myfilter": "1512",
        "name": "151285",
        "label": "SREEPUR KHARANDWIP"
      },
      {
        "myfilter": "1518",
        "name": "151813",
        "label": "BAILTALI"
      },
      {
        "myfilter": "1518",
        "name": "151828",
        "label": "BARAMA"
      },
      {
        "myfilter": "1518",
        "name": "151819",
        "label": "BARKAL"
      },
      {
        "myfilter": "1518",
        "name": "151838",
        "label": "DHOPACHHARI"
      },
      {
        "myfilter": "1518",
        "name": "151847",
        "label": "DOHAZARI"
      },
      {
        "myfilter": "1518",
        "name": "151866",
        "label": "HASHIMPUR"
      },
      {
        "myfilter": "1518",
        "name": "151876",
        "label": "JOARA"
      },
      {
        "myfilter": "1518",
        "name": "151885",
        "label": "KANCHANABAD"
      },
      {
        "myfilter": "1518",
        "name": "151895",
        "label": "SATBARIA"
      },
      {
        "myfilter": "1533",
        "name": "153311",
        "label": "ABDULLAPUR"
      },
      {
        "myfilter": "1533",
        "name": "153313",
        "label": "BAGAN BAZAR"
      },
      {
        "myfilter": "1533",
        "name": "153314",
        "label": "BAKTAPUR"
      },
      {
        "myfilter": "1533",
        "name": "153319",
        "label": "BHUJPUR"
      },
      {
        "myfilter": "1533",
        "name": "153323",
        "label": "DANTMARA"
      },
      {
        "myfilter": "1533",
        "name": "153338",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "1533",
        "name": "153328",
        "label": "DHARMAPUR"
      },
      {
        "myfilter": "1533",
        "name": "153342",
        "label": "HARWALCHHARI"
      },
      {
        "myfilter": "1533",
        "name": "153347",
        "label": "JAFARNAGAR"
      },
      {
        "myfilter": "1533",
        "name": "153352",
        "label": "KANCHAN NAGAR"
      },
      {
        "myfilter": "1533",
        "name": "153355",
        "label": "KHIRAM"
      },
      {
        "myfilter": "1533",
        "name": "153357",
        "label": "LELANG"
      },
      {
        "myfilter": "1533",
        "name": "153361",
        "label": "NANUPUR"
      },
      {
        "myfilter": "1533",
        "name": "153366",
        "label": "NARAYANHAT"
      },
      {
        "myfilter": "1533",
        "name": "153371",
        "label": "PAINDANGA"
      },
      {
        "myfilter": "1533",
        "name": "153380",
        "label": "ROUSHANGIRI"
      },
      {
        "myfilter": "1533",
        "name": "153390",
        "label": "SAMITIRHAT"
      },
      {
        "myfilter": "1533",
        "name": "153385",
        "label": "SUABIL"
      },
      {
        "myfilter": "1533",
        "name": "153395",
        "label": "SUNDARPUR"
      },
      {
        "myfilter": "1537",
        "name": "153710",
        "label": "BURISH CHAR"
      },
      {
        "myfilter": "1537",
        "name": "153711",
        "label": "CHHIBATALI"
      },
      {
        "myfilter": "1537",
        "name": "153717",
        "label": "CHIKANDANDI"
      },
      {
        "myfilter": "1537",
        "name": "153798",
        "label": "CHITTAGANG CNT."
      },
      {
        "myfilter": "1537",
        "name": "153723",
        "label": "DAKSHIN MADARSHA"
      },
      {
        "myfilter": "1537",
        "name": "153729",
        "label": "DHALAI"
      },
      {
        "myfilter": "1537",
        "name": "153735",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "1537",
        "name": "153741",
        "label": "FORHADABAD"
      },
      {
        "myfilter": "1537",
        "name": "153747",
        "label": "GARDUARA"
      },
      {
        "myfilter": "1537",
        "name": "153753",
        "label": "GUMAN MARDAN"
      },
      {
        "myfilter": "1537",
        "name": "153759",
        "label": "HATHAZARI"
      },
      {
        "myfilter": "1537",
        "name": "153765",
        "label": "MEKHAL"
      },
      {
        "myfilter": "1537",
        "name": "153771",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "1537",
        "name": "153777",
        "label": "NANGALMORA"
      },
      {
        "myfilter": "1537",
        "name": "153789",
        "label": "SHIKARPUR"
      },
      {
        "myfilter": "1537",
        "name": "153795",
        "label": "UTTAR MADARSA"
      },
      {
        "myfilter": "1547",
        "name": "154713",
        "label": "ADHUNAGAR"
      },
      {
        "myfilter": "1547",
        "name": "154710",
        "label": "AMIRABAD"
      },
      {
        "myfilter": "1547",
        "name": "154718",
        "label": "BARAHATIA"
      },
      {
        "myfilter": "1547",
        "name": "154725",
        "label": "CHARAMBA"
      },
      {
        "myfilter": "1547",
        "name": "154732",
        "label": "CHUNATI"
      },
      {
        "myfilter": "1547",
        "name": "154743",
        "label": "KALAUZAN"
      },
      {
        "myfilter": "1547",
        "name": "154762",
        "label": "LOHAGARA"
      },
      {
        "myfilter": "1547",
        "name": "154773",
        "label": "PADUA"
      },
      {
        "myfilter": "1547",
        "name": "154780",
        "label": "PUTIBILA"
      },
      {
        "myfilter": "1553",
        "name": "155322",
        "label": "DHUM"
      },
      {
        "myfilter": "1553",
        "name": "155324",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "1553",
        "name": "155327",
        "label": "HAITKANDI"
      },
      {
        "myfilter": "1553",
        "name": "155328",
        "label": "HINGULI"
      },
      {
        "myfilter": "1553",
        "name": "155329",
        "label": "ICHHAKHALI"
      },
      {
        "myfilter": "1553",
        "name": "155335",
        "label": "KARERHAT"
      },
      {
        "myfilter": "1553",
        "name": "155341",
        "label": "KATACHHARA"
      },
      {
        "myfilter": "1553",
        "name": "155347",
        "label": "KHAIYACHHARA"
      },
      {
        "myfilter": "1553",
        "name": "155371",
        "label": "MAGHADIA"
      },
      {
        "myfilter": "1553",
        "name": "155353",
        "label": "MAYANI"
      },
      {
        "myfilter": "1553",
        "name": "155359",
        "label": "MIRSHARAI"
      },
      {
        "myfilter": "1553",
        "name": "155365",
        "label": "MITHANALA"
      },
      {
        "myfilter": "1553",
        "name": "155377",
        "label": "OSMANPUR"
      },
      {
        "myfilter": "1553",
        "name": "155383",
        "label": "SAHERKHALI"
      },
      {
        "myfilter": "1553",
        "name": "155389",
        "label": "WAHEDPUR"
      },
      {
        "myfilter": "1553",
        "name": "155395",
        "label": "ZORWARGANJ"
      },
      {
        "myfilter": "1539",
        "name": "153912",
        "label": "ASIA"
      },
      {
        "myfilter": "1539",
        "name": "153919",
        "label": "BAIRAG (PART)"
      },
      {
        "myfilter": "1539",
        "name": "153918",
        "label": "BARA UTHAN"
      },
      {
        "myfilter": "1539",
        "name": "153915",
        "label": "BARALIA"
      },
      {
        "myfilter": "1539",
        "name": "153919",
        "label": "BHATIKHAIN"
      },
      {
        "myfilter": "1539",
        "name": "153921",
        "label": "CHANHARA"
      },
      {
        "myfilter": "1539",
        "name": "153924",
        "label": "CHAR LAKSHYA"
      },
      {
        "myfilter": "1539",
        "name": "153927",
        "label": "CHAR PATHARGHATA"
      },
      {
        "myfilter": "1539",
        "name": "153991",
        "label": "DAKHIN D.BHURSHI"
      },
      {
        "myfilter": "1539",
        "name": "153930",
        "label": "DHALGHAT"
      },
      {
        "myfilter": "1539",
        "name": "153939",
        "label": "HABILAS DWIP"
      },
      {
        "myfilter": "1539",
        "name": "153942",
        "label": "HAIDGAON"
      },
      {
        "myfilter": "1539",
        "name": "153952",
        "label": "JANGLUKHAIN"
      },
      {
        "myfilter": "1539",
        "name": "153994",
        "label": "JIRI"
      },
      {
        "myfilter": "1539",
        "name": "153955",
        "label": "JULDHA"
      },
      {
        "myfilter": "1539",
        "name": "153958",
        "label": "KACHUAI"
      },
      {
        "myfilter": "1539",
        "name": "153964",
        "label": "KASIAIS"
      },
      {
        "myfilter": "1539",
        "name": "153967",
        "label": "KELISHAHAR"
      },
      {
        "myfilter": "1539",
        "name": "153970",
        "label": "KHARANA"
      },
      {
        "myfilter": "1539",
        "name": "153973",
        "label": "KOLAGAON"
      },
      {
        "myfilter": "1539",
        "name": "153976",
        "label": "KUSUMPURA"
      },
      {
        "myfilter": "1539",
        "name": "153985",
        "label": "SIKALBAHA"
      },
      {
        "myfilter": "1539",
        "name": "153988",
        "label": "SOBHANDANDI"
      },
      {
        "myfilter": "1570",
        "name": "157015",
        "label": "BETAGI"
      },
      {
        "myfilter": "1570",
        "name": "157017",
        "label": "CHANDRAGHONA KADAMTALI"
      },
      {
        "myfilter": "1570",
        "name": "157069",
        "label": "DAKSHIN RAJANAGAR"
      },
      {
        "myfilter": "1570",
        "name": "157025",
        "label": "HOSNABAD"
      },
      {
        "myfilter": "1570",
        "name": "157027",
        "label": "ISLAMPUR"
      },
      {
        "myfilter": "1570",
        "name": "157030",
        "label": "KODALA"
      },
      {
        "myfilter": "1570",
        "name": "157032",
        "label": "LALANAGAR"
      },
      {
        "myfilter": "1570",
        "name": "157034",
        "label": "MARIAMNAGAR"
      },
      {
        "myfilter": "1570",
        "name": "157043",
        "label": "PADUA"
      },
      {
        "myfilter": "1570",
        "name": "157051",
        "label": "PARUA"
      },
      {
        "myfilter": "1570",
        "name": "157060",
        "label": "POMARA"
      },
      {
        "myfilter": "1570",
        "name": "157021",
        "label": "RAJANAGAR"
      },
      {
        "myfilter": "1570",
        "name": "157077",
        "label": "RANGUNIA"
      },
      {
        "myfilter": "1570",
        "name": "157086",
        "label": "SARAPBHATA"
      },
      {
        "myfilter": "1570",
        "name": "157094",
        "label": "SILOK"
      },
      {
        "myfilter": "1574",
        "name": "157411",
        "label": "BAGOAN"
      },
      {
        "myfilter": "1574",
        "name": "157412",
        "label": "BINAJURI"
      },
      {
        "myfilter": "1574",
        "name": "157418",
        "label": "CHIKDAIR"
      },
      {
        "myfilter": "1574",
        "name": "157425",
        "label": "DABUA"
      },
      {
        "myfilter": "1574",
        "name": "157437",
        "label": "GAHIRA"
      },
      {
        "myfilter": "1574",
        "name": "157444",
        "label": "HALADIA"
      },
      {
        "myfilter": "1574",
        "name": "157450",
        "label": "KADALPUR"
      },
      {
        "myfilter": "1574",
        "name": "157463",
        "label": "NOA PARA"
      },
      {
        "myfilter": "1574",
        "name": "157456",
        "label": "NOAJISPUR"
      },
      {
        "myfilter": "1574",
        "name": "157469",
        "label": "PAHARTALI"
      },
      {
        "myfilter": "1574",
        "name": "157494",
        "label": "PASCHIM GUZARA"
      },
      {
        "myfilter": "1574",
        "name": "157431",
        "label": "PURBA GUZARA"
      },
      {
        "myfilter": "1574",
        "name": "157475",
        "label": "RAOZAN"
      },
      {
        "myfilter": "1574",
        "name": "157488",
        "label": "URKIRCHAR"
      },
      {
        "myfilter": "1578",
        "name": "157811",
        "label": "AMANULLAH"
      },
      {
        "myfilter": "1578",
        "name": "157813",
        "label": "AZIMPUR"
      },
      {
        "myfilter": "1578",
        "name": "157820",
        "label": "BAURIA"
      },
      {
        "myfilter": "1578",
        "name": "157825",
        "label": "DIGGHAPAR"
      },
      {
        "myfilter": "1578",
        "name": "157830",
        "label": "GACHHUA"
      },
      {
        "myfilter": "1578",
        "name": "157835",
        "label": "HARAMIA"
      },
      {
        "myfilter": "1578",
        "name": "157840",
        "label": "HARISPUR"
      },
      {
        "myfilter": "1578",
        "name": "157855",
        "label": "KALAPANIA"
      },
      {
        "myfilter": "1578",
        "name": "157865",
        "label": "MAGDHARA"
      },
      {
        "myfilter": "1578",
        "name": "157870",
        "label": "MAITBHANGA"
      },
      {
        "myfilter": "1578",
        "name": "157875",
        "label": "MUSAPUR"
      },
      {
        "myfilter": "1578",
        "name": "157885",
        "label": "RAHMATPUR"
      },
      {
        "myfilter": "1578",
        "name": "157890",
        "label": "SANTOSHPUR"
      },
      {
        "myfilter": "1578",
        "name": "157892",
        "label": "SARIKAIT"
      },
      {
        "myfilter": "1578",
        "name": "157896",
        "label": "URIRCHAR"
      },
      {
        "myfilter": "1582",
        "name": "158212",
        "label": "AMILAIS"
      },
      {
        "myfilter": "1582",
        "name": "158221",
        "label": "BAZALIA"
      },
      {
        "myfilter": "1582",
        "name": "158229",
        "label": "CHARATI"
      },
      {
        "myfilter": "1582",
        "name": "158240",
        "label": "DHARMAPUR"
      },
      {
        "myfilter": "1582",
        "name": "158236",
        "label": "DHEMSA"
      },
      {
        "myfilter": "1582",
        "name": "158214",
        "label": "EOCHIA"
      },
      {
        "myfilter": "1582",
        "name": "158247",
        "label": "KALIAIS"
      },
      {
        "myfilter": "1582",
        "name": "158251",
        "label": "KANCHANA"
      },
      {
        "myfilter": "1582",
        "name": "158254",
        "label": "KEOCHIA"
      },
      {
        "myfilter": "1582",
        "name": "158258",
        "label": "KHAGARIA"
      },
      {
        "myfilter": "1582",
        "name": "158265",
        "label": "MADARSA"
      },
      {
        "myfilter": "1582",
        "name": "158269",
        "label": "NALUA"
      },
      {
        "myfilter": "1582",
        "name": "158294",
        "label": "PASCHIM DHEMSA"
      },
      {
        "myfilter": "1582",
        "name": "158276",
        "label": "PURANAGAR"
      },
      {
        "myfilter": "1582",
        "name": "158283",
        "label": "SADAHA"
      },
      {
        "myfilter": "1582",
        "name": "158287",
        "label": "SATKANIA"
      },
      {
        "myfilter": "1582",
        "name": "158291",
        "label": "SONAKANIA"
      },
      {
        "myfilter": "1586",
        "name": "158616",
        "label": "BANSHBARIA"
      },
      {
        "myfilter": "1586",
        "name": "158619",
        "label": "BARABKUNDA"
      },
      {
        "myfilter": "1586",
        "name": "158628",
        "label": "BARIADYALA"
      },
      {
        "myfilter": "1586",
        "name": "158638",
        "label": "BHATIARI"
      },
      {
        "myfilter": "1586",
        "name": "158698",
        "label": "BHATIARI CANTONMENT AREA"
      },
      {
        "myfilter": "1586",
        "name": "158647",
        "label": "KUMIRA"
      },
      {
        "myfilter": "1586",
        "name": "158657",
        "label": "MURADPUR"
      },
      {
        "myfilter": "1586",
        "name": "158695",
        "label": "SAIDPUR"
      },
      {
        "myfilter": "1586",
        "name": "158666",
        "label": "SALIMPUR"
      },
      {
        "myfilter": "1586",
        "name": "158685",
        "label": "SONAICHHARI"
      },
      {
        "myfilter": "1909",
        "name": "190911",
        "label": "ADDA"
      },
      {
        "myfilter": "1909",
        "name": "190912",
        "label": "ADRA"
      },
      {
        "myfilter": "1909",
        "name": "190918",
        "label": "AGANAGAR"
      },
      {
        "myfilter": "1909",
        "name": "190925",
        "label": "BHABANIPUR"
      },
      {
        "myfilter": "1909",
        "name": "190931",
        "label": "BHAUKSAR"
      },
      {
        "myfilter": "1909",
        "name": "190950",
        "label": "CHITADDA"
      },
      {
        "myfilter": "1909",
        "name": "190969",
        "label": "DAKSHIN KHOSBAS"
      },
      {
        "myfilter": "1909",
        "name": "190994",
        "label": "DAKSHIN SHILMURI"
      },
      {
        "myfilter": "1909",
        "name": "190937",
        "label": "DEORA"
      },
      {
        "myfilter": "1909",
        "name": "190944",
        "label": "GALIMPUR"
      },
      {
        "myfilter": "1909",
        "name": "190956",
        "label": "JALAM"
      },
      {
        "myfilter": "1909",
        "name": "190982",
        "label": "LAKSHMIPUR"
      },
      {
        "myfilter": "1909",
        "name": "190991",
        "label": "SHAKPUR"
      },
      {
        "myfilter": "1909",
        "name": "190963",
        "label": "UTTAR KHOSBAS"
      },
      {
        "myfilter": "1909",
        "name": "190975",
        "label": "UTTAR PAYALGACHHA"
      },
      {
        "myfilter": "1909",
        "name": "190988",
        "label": "UTTAR SHILMURI"
      },
      {
        "myfilter": "1915",
        "name": "191518",
        "label": "BRAHMAN PARA"
      },
      {
        "myfilter": "1915",
        "name": "191544",
        "label": "CHANDLA"
      },
      {
        "myfilter": "1915",
        "name": "191530",
        "label": "DULALPUR"
      },
      {
        "myfilter": "1915",
        "name": "191556",
        "label": "MADHABPUR"
      },
      {
        "myfilter": "1915",
        "name": "191562",
        "label": "MALAPARA"
      },
      {
        "myfilter": "1915",
        "name": "191582",
        "label": "SAHEBABAD"
      },
      {
        "myfilter": "1915",
        "name": "191588",
        "label": "SHASHIDAL"
      },
      {
        "myfilter": "1915",
        "name": "191550",
        "label": "SIDLAI"
      },
      {
        "myfilter": "1918",
        "name": "191811",
        "label": "BAKSIMAIL"
      },
      {
        "myfilter": "1918",
        "name": "191812",
        "label": "BHARELLA DAKSHIN"
      },
      {
        "myfilter": "1918",
        "name": "191815",
        "label": "BHARELLA UTTAR"
      },
      {
        "myfilter": "1918",
        "name": "191831",
        "label": "BURICHANG"
      },
      {
        "myfilter": "1918",
        "name": "191863",
        "label": "MAINAMATI"
      },
      {
        "myfilter": "1918",
        "name": "191869",
        "label": "MOKAM"
      },
      {
        "myfilter": "1918",
        "name": "191872",
        "label": "PIR JATRAPUR"
      },
      {
        "myfilter": "1918",
        "name": "191875",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "1918",
        "name": "191894",
        "label": "SHOLANAL"
      },
      {
        "myfilter": "1927",
        "name": "192747",
        "label": "ATBAR PUR"
      },
      {
        "myfilter": "1927",
        "name": "192723",
        "label": "BARA KARAI"
      },
      {
        "myfilter": "1927",
        "name": "192715",
        "label": "BARERA"
      },
      {
        "myfilter": "1927",
        "name": "192739",
        "label": "BARKAIT"
      },
      {
        "myfilter": "1927",
        "name": "192787",
        "label": "BATAKASH"
      },
      {
        "myfilter": "1927",
        "name": "192763",
        "label": "DOLLAI NOWABAB PUR"
      },
      {
        "myfilter": "1927",
        "name": "192755",
        "label": "GALLAI"
      },
      {
        "myfilter": "1927",
        "name": "192731",
        "label": "JOYAG"
      },
      {
        "myfilter": "1927",
        "name": "192713",
        "label": "KERAN KHAL"
      },
      {
        "myfilter": "1927",
        "name": "192771",
        "label": "MADHYA"
      },
      {
        "myfilter": "1927",
        "name": "192720",
        "label": "MAHICHAL"
      },
      {
        "myfilter": "1927",
        "name": "192779",
        "label": "MAIJKHAR"
      },
      {
        "myfilter": "1927",
        "name": "192794",
        "label": "SUHILPUR"
      },
      {
        "myfilter": "1931",
        "name": "193110",
        "label": "ALKARA"
      },
      {
        "myfilter": "1931",
        "name": "193115",
        "label": "BATISHA"
      },
      {
        "myfilter": "1931",
        "name": "193119",
        "label": "CHEORA"
      },
      {
        "myfilter": "1931",
        "name": "193138",
        "label": "GHOLPASHA"
      },
      {
        "myfilter": "1931",
        "name": "193142",
        "label": "GUNABATI"
      },
      {
        "myfilter": "1931",
        "name": "193147",
        "label": "JAGANNATH DIGHI"
      },
      {
        "myfilter": "1931",
        "name": "193152",
        "label": "KALIKAPUR"
      },
      {
        "myfilter": "1931",
        "name": "193157",
        "label": "KANKAPAIT"
      },
      {
        "myfilter": "1931",
        "name": "193161",
        "label": "KASHINAGAR"
      },
      {
        "myfilter": "1931",
        "name": "193171",
        "label": "MUNSHIRHAT"
      },
      {
        "myfilter": "1931",
        "name": "193185",
        "label": "SHUBHAPUR"
      },
      {
        "myfilter": "1931",
        "name": "193190",
        "label": "SREEPUR"
      },
      {
        "myfilter": "1931",
        "name": "193195",
        "label": "UJIRPUR"
      },
      {
        "myfilter": "1967",
        "name": "196722",
        "label": "AMRATALI"
      },
      {
        "myfilter": "1967",
        "name": "196798",
        "label": "COMILLA CANTT"
      },
      {
        "myfilter": "1967",
        "name": "196751",
        "label": "DAKSHIN DURGAPUR"
      },
      {
        "myfilter": "1967",
        "name": "196765",
        "label": "JAGANNATHPUR"
      },
      {
        "myfilter": "1967",
        "name": "196768",
        "label": "KALIR BAZAR"
      },
      {
        "myfilter": "1967",
        "name": "196790",
        "label": "PANCHTHUBI"
      },
      {
        "myfilter": "1967",
        "name": "196794",
        "label": "UTTAR DURGAPUR"
      },
      {
        "myfilter": "1933",
        "name": "193312",
        "label": "BAGHMARA DAKSHIN"
      },
      {
        "myfilter": "1933",
        "name": "193313",
        "label": "BAGHMARA UTTAR"
      },
      {
        "myfilter": "1933",
        "name": "193324",
        "label": "BARA PARA"
      },
      {
        "myfilter": "1933",
        "name": "193328",
        "label": "BELGHAR DAKSHIN"
      },
      {
        "myfilter": "1933",
        "name": "193329",
        "label": "BELGHAR UTTAR"
      },
      {
        "myfilter": "1933",
        "name": "193331",
        "label": "BHOLAIN (DAKSHIN)"
      },
      {
        "myfilter": "1933",
        "name": "193333",
        "label": "BHOLAIN (UTTAR)"
      },
      {
        "myfilter": "1933",
        "name": "193335",
        "label": "BIJOYPUR"
      },
      {
        "myfilter": "1933",
        "name": "193339",
        "label": "CHOUARA"
      },
      {
        "myfilter": "1933",
        "name": "193358",
        "label": "GALIARA"
      },
      {
        "myfilter": "1933",
        "name": "193380",
        "label": "PASCHIM JOREKARAN"
      },
      {
        "myfilter": "1933",
        "name": "193383",
        "label": "PERUL (DAKSHIN)"
      },
      {
        "myfilter": "1933",
        "name": "193387",
        "label": "PERUL (UTTAR)"
      },
      {
        "myfilter": "1933",
        "name": "193373",
        "label": "PURBA JOREKARAN"
      },
      {
        "myfilter": "1936",
        "name": "193690",
        "label": "BARAPARA"
      },
      {
        "myfilter": "1936",
        "name": "193625",
        "label": "BITESHWAR"
      },
      {
        "myfilter": "1936",
        "name": "193621",
        "label": "DAUDKANDI UTTAR"
      },
      {
        "myfilter": "1936",
        "name": "193682",
        "label": "DAULATPUR (PURBA PANCHGACHHIA)"
      },
      {
        "myfilter": "1936",
        "name": "193634",
        "label": "ELLIOTGANJ DAKSHIN"
      },
      {
        "myfilter": "1936",
        "name": "193630",
        "label": "ELLIOTGANJ UTTAR"
      },
      {
        "myfilter": "1936",
        "name": "193651",
        "label": "GAURIPUR"
      },
      {
        "myfilter": "1936",
        "name": "193638",
        "label": "GOALMARI"
      },
      {
        "myfilter": "1936",
        "name": "193647",
        "label": "JINGLATALI"
      },
      {
        "myfilter": "1936",
        "name": "193664",
        "label": "MARUKA"
      },
      {
        "myfilter": "1936",
        "name": "193673",
        "label": "MOHAMMADPUR PASCHIM"
      },
      {
        "myfilter": "1936",
        "name": "193684",
        "label": "MOHAMMADPUR PURBA"
      },
      {
        "myfilter": "1936",
        "name": "193685",
        "label": "PADUA"
      },
      {
        "myfilter": "1936",
        "name": "193686",
        "label": "PANCHGACHHIA PASCHIM"
      },
      {
        "myfilter": "1936",
        "name": "193694",
        "label": "SUNDALPUR"
      },
      {
        "myfilter": "1940",
        "name": "194010",
        "label": "BARA SHALGHAR"
      },
      {
        "myfilter": "1940",
        "name": "194023",
        "label": "BARKAMTA"
      },
      {
        "myfilter": "1940",
        "name": "194083",
        "label": "BHANI"
      },
      {
        "myfilter": "1940",
        "name": "194059",
        "label": "DAKSHIN GUNAIGHAR"
      },
      {
        "myfilter": "1940",
        "name": "194035",
        "label": "DHAMTI"
      },
      {
        "myfilter": "1940",
        "name": "194071",
        "label": "ELAHABAD"
      },
      {
        "myfilter": "1940",
        "name": "194047",
        "label": "FATEHABAD"
      },
      {
        "myfilter": "1940",
        "name": "194011",
        "label": "ISAB PUR"
      },
      {
        "myfilter": "1940",
        "name": "194065",
        "label": "JAFARGANJ"
      },
      {
        "myfilter": "1940",
        "name": "194017",
        "label": "MOHAN PUR"
      },
      {
        "myfilter": "1940",
        "name": "194077",
        "label": "RAJAMEHAR"
      },
      {
        "myfilter": "1940",
        "name": "194089",
        "label": "RASULPUR"
      },
      {
        "myfilter": "1940",
        "name": "194095",
        "label": "SUBIL"
      },
      {
        "myfilter": "1940",
        "name": "194041",
        "label": "SULTANPUR"
      },
      {
        "myfilter": "1940",
        "name": "194053",
        "label": "UTTAR GUNAIGHAR"
      },
      {
        "myfilter": "1954",
        "name": "195415",
        "label": "ASADPUR"
      },
      {
        "myfilter": "1954",
        "name": "195420",
        "label": "BHASANIA"
      },
      {
        "myfilter": "1954",
        "name": "195428",
        "label": "CHANDER CHAR"
      },
      {
        "myfilter": "1954",
        "name": "195422",
        "label": "DULAL PUR"
      },
      {
        "myfilter": "1954",
        "name": "195450",
        "label": "GARMORA"
      },
      {
        "myfilter": "1954",
        "name": "195447",
        "label": "GHAGUTIA"
      },
      {
        "myfilter": "1954",
        "name": "195425",
        "label": "JOYPUR"
      },
      {
        "myfilter": "1954",
        "name": "195476",
        "label": "MATHABANGA"
      },
      {
        "myfilter": "1954",
        "name": "195485",
        "label": "NILAKHI"
      },
      {
        "myfilter": "1972",
        "name": "197284",
        "label": "AJGARA"
      },
      {
        "myfilter": "1972",
        "name": "197217",
        "label": "BAKAI"
      },
      {
        "myfilter": "1972",
        "name": "197235",
        "label": "GOBINDAPUR"
      },
      {
        "myfilter": "1972",
        "name": "197277",
        "label": "KANDIRPAR"
      },
      {
        "myfilter": "1972",
        "name": "197252",
        "label": "LAKSAM"
      },
      {
        "myfilter": "1972",
        "name": "197263",
        "label": "MUDAFARGANJ"
      },
      {
        "myfilter": "1972",
        "name": "197287",
        "label": "UTTARDAH"
      },
      {
        "myfilter": "1974",
        "name": "197413",
        "label": "BAISHGAON"
      },
      {
        "myfilter": "1974",
        "name": "197417",
        "label": "BIPULASAR"
      },
      {
        "myfilter": "1974",
        "name": "197431",
        "label": "HASNABAD"
      },
      {
        "myfilter": "1974",
        "name": "197445",
        "label": "JHALAM (DAKSHIN)"
      },
      {
        "myfilter": "1974",
        "name": "197442",
        "label": "JHALAM (UTTAR)"
      },
      {
        "myfilter": "1974",
        "name": "197453",
        "label": "KHILA"
      },
      {
        "myfilter": "1974",
        "name": "197459",
        "label": "LAKSHMANPUR"
      },
      {
        "myfilter": "1974",
        "name": "197463",
        "label": "MAISATUA"
      },
      {
        "myfilter": "1974",
        "name": "197470",
        "label": "NATHER PETUA"
      },
      {
        "myfilter": "1974",
        "name": "197482",
        "label": "SARASHPUR"
      },
      {
        "myfilter": "1974",
        "name": "197494",
        "label": "UTTAR HAWLA"
      },
      {
        "myfilter": "1975",
        "name": "197511",
        "label": "BAORKHOLA"
      },
      {
        "myfilter": "1975",
        "name": "197512",
        "label": "BARAKANDA"
      },
      {
        "myfilter": "1975",
        "name": "197521",
        "label": "CHALIBHANGA"
      },
      {
        "myfilter": "1975",
        "name": "197519",
        "label": "CHANDANPUR"
      },
      {
        "myfilter": "1975",
        "name": "197543",
        "label": "GOBINDAPUR"
      },
      {
        "myfilter": "1975",
        "name": "197553",
        "label": "LUTER CHAR"
      },
      {
        "myfilter": "1975",
        "name": "197571",
        "label": "MANIKER CHAR"
      },
      {
        "myfilter": "1975",
        "name": "197595",
        "label": "RADHANAGAR"
      },
      {
        "myfilter": "1981",
        "name": "198110",
        "label": "AKUBPUR"
      },
      {
        "myfilter": "1981",
        "name": "198111",
        "label": "ANDIKOT"
      },
      {
        "myfilter": "1981",
        "name": "198172",
        "label": "BABUTI PARA"
      },
      {
        "myfilter": "1981",
        "name": "198122",
        "label": "CHAPITALA"
      },
      {
        "myfilter": "1981",
        "name": "198131",
        "label": "CHHALIAKANDI"
      },
      {
        "myfilter": "1981",
        "name": "198190",
        "label": "DAKSHIN RAMCHANDRAPUR"
      },
      {
        "myfilter": "1981",
        "name": "198127",
        "label": "DARORA"
      },
      {
        "myfilter": "1981",
        "name": "198136",
        "label": "DHAMGHAR"
      },
      {
        "myfilter": "1981",
        "name": "198140",
        "label": "JAHAPUR"
      },
      {
        "myfilter": "1981",
        "name": "198145",
        "label": "JATRAPUR"
      },
      {
        "myfilter": "1981",
        "name": "198149",
        "label": "KAMALLA"
      },
      {
        "myfilter": "1981",
        "name": "198154",
        "label": "MURADNAGAR"
      },
      {
        "myfilter": "1981",
        "name": "198167",
        "label": "PAHARPUR"
      },
      {
        "myfilter": "1981",
        "name": "198118",
        "label": "PASCHIM BANGARA"
      },
      {
        "myfilter": "1981",
        "name": "198163",
        "label": "PASCHIM NABIPUR"
      },
      {
        "myfilter": "1981",
        "name": "198181",
        "label": "PASCHIM PURBADHAIR"
      },
      {
        "myfilter": "1981",
        "name": "198113",
        "label": "PURBA BANGARA"
      },
      {
        "myfilter": "1981",
        "name": "198158",
        "label": "PURBA NABIPUR"
      },
      {
        "myfilter": "1981",
        "name": "198176",
        "label": "PURBA PURBADHAIR"
      },
      {
        "myfilter": "1981",
        "name": "198194",
        "label": "SREEKAIL"
      },
      {
        "myfilter": "1981",
        "name": "198191",
        "label": "TANKI"
      },
      {
        "myfilter": "1981",
        "name": "198185",
        "label": "UTTAR RAMCHANDRAPUR"
      },
      {
        "myfilter": "1987",
        "name": "198711",
        "label": "ADRA"
      },
      {
        "myfilter": "1987",
        "name": "198734",
        "label": "BAKSHAGANJ"
      },
      {
        "myfilter": "1987",
        "name": "198717",
        "label": "BANGODDA"
      },
      {
        "myfilter": "1987",
        "name": "198751",
        "label": "DAULKHAR"
      },
      {
        "myfilter": "1987",
        "name": "198743",
        "label": "DHALUA"
      },
      {
        "myfilter": "1987",
        "name": "198757",
        "label": "HESAKHAL"
      },
      {
        "myfilter": "1987",
        "name": "198760",
        "label": "JODDA"
      },
      {
        "myfilter": "1987",
        "name": "198769",
        "label": "MOKARA"
      },
      {
        "myfilter": "1987",
        "name": "198773",
        "label": "MOKRABPUR"
      },
      {
        "myfilter": "1987",
        "name": "198780",
        "label": "PERIA"
      },
      {
        "myfilter": "1987",
        "name": "198786",
        "label": "ROYKOT"
      },
      {
        "myfilter": "1987",
        "name": "198794",
        "label": "SATBARIA"
      },
      {
        "myfilter": "1994",
        "name": "199410",
        "label": "BALARAMPUR"
      },
      {
        "myfilter": "1994",
        "name": "199417",
        "label": "BITIKANDI"
      },
      {
        "myfilter": "1994",
        "name": "199435",
        "label": "JAGATPUR"
      },
      {
        "myfilter": "1994",
        "name": "199445",
        "label": "JIARKANDI"
      },
      {
        "myfilter": "1994",
        "name": "199462",
        "label": "KALAKANDI"
      },
      {
        "myfilter": "1994",
        "name": "199467",
        "label": "KARIKANDI"
      },
      {
        "myfilter": "1994",
        "name": "199469",
        "label": "MAJIDPUR"
      },
      {
        "myfilter": "1994",
        "name": "199477",
        "label": "NARAYANDIA"
      },
      {
        "myfilter": "1994",
        "name": "199485",
        "label": "SATANI"
      },
      {
        "myfilter": "2216",
        "name": "221610",
        "label": "BADARKHALI"
      },
      {
        "myfilter": "2216",
        "name": "221612",
        "label": "BAMO BILCHARI"
      },
      {
        "myfilter": "2216",
        "name": "221616",
        "label": "BARAITALI"
      },
      {
        "myfilter": "2216",
        "name": "221622",
        "label": "BHEOLA MANIK CHAR"
      },
      {
        "myfilter": "2216",
        "name": "221627",
        "label": "CHIRINGA"
      },
      {
        "myfilter": "2216",
        "name": "221631",
        "label": "DEMUSIA"
      },
      {
        "myfilter": "2216",
        "name": "221633",
        "label": "DULAHAZARA"
      },
      {
        "myfilter": "2216",
        "name": "221644",
        "label": "FASIAKHALI"
      },
      {
        "myfilter": "2216",
        "name": "221650",
        "label": "HARBANG"
      },
      {
        "myfilter": "2216",
        "name": "221661",
        "label": "KAIARBIL"
      },
      {
        "myfilter": "2216",
        "name": "221655",
        "label": "KAKHARA"
      },
      {
        "myfilter": "2216",
        "name": "221667",
        "label": "KHUNTAKHALI"
      },
      {
        "myfilter": "2216",
        "name": "221669",
        "label": "KONAKHALI"
      },
      {
        "myfilter": "2216",
        "name": "221672",
        "label": "LAKHYARCHAR"
      },
      {
        "myfilter": "2216",
        "name": "221694",
        "label": "PASCHIM BARA BHEOLA"
      },
      {
        "myfilter": "2216",
        "name": "221639",
        "label": "PURBA BARABHEOLA"
      },
      {
        "myfilter": "2216",
        "name": "221680",
        "label": "SAHARBIL"
      },
      {
        "myfilter": "2216",
        "name": "221687",
        "label": "SURAJPUR MANIKPUR"
      },
      {
        "myfilter": "2224",
        "name": "222420",
        "label": "BHARUAKHALI"
      },
      {
        "myfilter": "2224",
        "name": "222422",
        "label": "CHAUFALDANDI"
      },
      {
        "myfilter": "2224",
        "name": "222435",
        "label": "IDGAON"
      },
      {
        "myfilter": "2224",
        "name": "222442",
        "label": "ISLAMABAD"
      },
      {
        "myfilter": "2224",
        "name": "222438",
        "label": "ISLAMPUR"
      },
      {
        "myfilter": "2224",
        "name": "222445",
        "label": "JALALABAD"
      },
      {
        "myfilter": "2224",
        "name": "222447",
        "label": "JHILWANJA"
      },
      {
        "myfilter": "2224",
        "name": "222459",
        "label": "KHURUSHKUL"
      },
      {
        "myfilter": "2224",
        "name": "222471",
        "label": "PATALI MACHHUAKHALI"
      },
      {
        "myfilter": "2224",
        "name": "222483",
        "label": "POKKHALI"
      },
      {
        "myfilter": "2245",
        "name": "224513",
        "label": "ALI AKBAR DEIL"
      },
      {
        "myfilter": "2245",
        "name": "224527",
        "label": "BARAGHOP"
      },
      {
        "myfilter": "2245",
        "name": "224540",
        "label": "DAKSHIN DHURUNG"
      },
      {
        "myfilter": "2245",
        "name": "224554",
        "label": "KAIYARBIL"
      },
      {
        "myfilter": "2245",
        "name": "224567",
        "label": "LEMSIKHALI"
      },
      {
        "myfilter": "2245",
        "name": "224581",
        "label": "UTTAR DHURUNG"
      },
      {
        "myfilter": "2249",
        "name": "224911",
        "label": "BARA MAHESKHALI"
      },
      {
        "myfilter": "2249",
        "name": "224918",
        "label": "CHHOTAMOHES KHALI"
      },
      {
        "myfilter": "2249",
        "name": "224923",
        "label": "DHALGHATA"
      },
      {
        "myfilter": "2249",
        "name": "224947",
        "label": "HOANAK"
      },
      {
        "myfilter": "2249",
        "name": "224959",
        "label": "KALARMARCHHARA"
      },
      {
        "myfilter": "2249",
        "name": "224962",
        "label": "KUTUBJOM"
      },
      {
        "myfilter": "2249",
        "name": "224971",
        "label": "MATARBARI"
      },
      {
        "myfilter": "2249",
        "name": "224983",
        "label": "SAFLAPUR"
      },
      {
        "myfilter": "2256",
        "name": "225611",
        "label": "BARA BAKIA"
      },
      {
        "myfilter": "2256",
        "name": "225678",
        "label": "MAGNAMA"
      },
      {
        "myfilter": "2256",
        "name": "225683",
        "label": "PEKUA"
      },
      {
        "myfilter": "2256",
        "name": "225689",
        "label": "RAJAKHALI"
      },
      {
        "myfilter": "2256",
        "name": "225693",
        "label": "SHILKHALI"
      },
      {
        "myfilter": "2256",
        "name": "225696",
        "label": "TAITONG"
      },
      {
        "myfilter": "2256",
        "name": "225655",
        "label": "UJANTIA"
      },
      {
        "myfilter": "2266",
        "name": "226613",
        "label": "CHAKMARKUL"
      },
      {
        "myfilter": "2266",
        "name": "226685",
        "label": "DAKSHIN MITHACHHARI"
      },
      {
        "myfilter": "2266",
        "name": "226615",
        "label": "FATEKHARKUL"
      },
      {
        "myfilter": "2266",
        "name": "226619",
        "label": "GARJANIA"
      },
      {
        "myfilter": "2266",
        "name": "226628",
        "label": "IDGAR"
      },
      {
        "myfilter": "2266",
        "name": "226638",
        "label": "JOARIANALA"
      },
      {
        "myfilter": "2266",
        "name": "226647",
        "label": "KACHHAPIA"
      },
      {
        "myfilter": "2266",
        "name": "226666",
        "label": "KAUARKHOP"
      },
      {
        "myfilter": "2266",
        "name": "226657",
        "label": "KHUNIAPALONG"
      },
      {
        "myfilter": "2266",
        "name": "226676",
        "label": "RAJARKUL"
      },
      {
        "myfilter": "2266",
        "name": "226670",
        "label": "RASHID NAGAR"
      },
      {
        "myfilter": "2290",
        "name": "229015",
        "label": "BAHARCHHARA"
      },
      {
        "myfilter": "2290",
        "name": "229031",
        "label": "NHILLA"
      },
      {
        "myfilter": "2290",
        "name": "229047",
        "label": "SABRANG"
      },
      {
        "myfilter": "2290",
        "name": "229039",
        "label": "ST.MARTIN DWIP"
      },
      {
        "myfilter": "2290",
        "name": "229063",
        "label": "TEKNAF"
      },
      {
        "myfilter": "2290",
        "name": "229079",
        "label": "WHYKONG"
      },
      {
        "myfilter": "2294",
        "name": "229415",
        "label": "HALDIA PALONG"
      },
      {
        "myfilter": "2294",
        "name": "229431",
        "label": "JALIA PALONG"
      },
      {
        "myfilter": "2294",
        "name": "229479",
        "label": "PALONG KHALI"
      },
      {
        "myfilter": "2294",
        "name": "229447",
        "label": "RAJA PALONG"
      },
      {
        "myfilter": "2294",
        "name": "229463",
        "label": "RATNA PALONG"
      },
      {
        "myfilter": "3014",
        "name": "301447",
        "label": "GOPAL"
      },
      {
        "myfilter": "3014",
        "name": "301457",
        "label": "MOHAMAYA"
      },
      {
        "myfilter": "3014",
        "name": "301476",
        "label": "PATHANNAGAR"
      },
      {
        "myfilter": "3014",
        "name": "301485",
        "label": "RADHANAGAR"
      },
      {
        "myfilter": "3014",
        "name": "301495",
        "label": "SUBHAPUR"
      },
      {
        "myfilter": "3025",
        "name": "302512",
        "label": "DAGANBHUIYAN"
      },
      {
        "myfilter": "3025",
        "name": "302538",
        "label": "JAILASHKARA"
      },
      {
        "myfilter": "3025",
        "name": "302556",
        "label": "MATHU BHUIYAN"
      },
      {
        "myfilter": "3025",
        "name": "302569",
        "label": "PURBA CHANDRAPUR"
      },
      {
        "myfilter": "3025",
        "name": "302573",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "3025",
        "name": "302577",
        "label": "RAMNAGAR"
      },
      {
        "myfilter": "3025",
        "name": "302590",
        "label": "SINDURPUR"
      },
      {
        "myfilter": "3025",
        "name": "302594",
        "label": "YAKUBPUR"
      },
      {
        "myfilter": "3029",
        "name": "302920",
        "label": "BALIGAON"
      },
      {
        "myfilter": "3029",
        "name": "302922",
        "label": "DHALIA"
      },
      {
        "myfilter": "3029",
        "name": "302923",
        "label": "DHARMAPUR"
      },
      {
        "myfilter": "3029",
        "name": "302925",
        "label": "FARHADNAGAR"
      },
      {
        "myfilter": "3029",
        "name": "302930",
        "label": "FAZILPUR"
      },
      {
        "myfilter": "3029",
        "name": "302943",
        "label": "KALIDAH"
      },
      {
        "myfilter": "3029",
        "name": "302947",
        "label": "KAZIRBAG"
      },
      {
        "myfilter": "3029",
        "name": "302951",
        "label": "LEMUA"
      },
      {
        "myfilter": "3029",
        "name": "302960",
        "label": "MATABI"
      },
      {
        "myfilter": "3029",
        "name": "302964",
        "label": "PANCHGACHHIYA"
      },
      {
        "myfilter": "3029",
        "name": "302982",
        "label": "SANUA"
      },
      {
        "myfilter": "3029",
        "name": "302986",
        "label": "SHARSHADI"
      },
      {
        "myfilter": "3041",
        "name": "304113",
        "label": "AMJADHAT"
      },
      {
        "myfilter": "3041",
        "name": "304127",
        "label": "ANANDAPUR"
      },
      {
        "myfilter": "3041",
        "name": "304154",
        "label": "DARBARPUR"
      },
      {
        "myfilter": "3041",
        "name": "304167",
        "label": "FULGAZI"
      },
      {
        "myfilter": "3041",
        "name": "304174",
        "label": "G.M.HAT"
      },
      {
        "myfilter": "3041",
        "name": "304181",
        "label": "MUNSHIRHAT"
      },
      {
        "myfilter": "3051",
        "name": "305140",
        "label": "BAKSH MOHAMMAD"
      },
      {
        "myfilter": "3051",
        "name": "305123",
        "label": "CHITHALIA"
      },
      {
        "myfilter": "3051",
        "name": "305147",
        "label": "MIRZANAGAR"
      },
      {
        "myfilter": "3094",
        "name": "309415",
        "label": "AMIRABAD"
      },
      {
        "myfilter": "3094",
        "name": "309419",
        "label": "BAGADANA"
      },
      {
        "myfilter": "3094",
        "name": "309428",
        "label": "CHAR CHANDIA"
      },
      {
        "myfilter": "3094",
        "name": "309438",
        "label": "CHAR DARBESH"
      },
      {
        "myfilter": "3094",
        "name": "309447",
        "label": "CHAR MAJLISHPUR"
      },
      {
        "myfilter": "3094",
        "name": "309457",
        "label": "MANGALKANDI"
      },
      {
        "myfilter": "3094",
        "name": "309466",
        "label": "MATIGANJ"
      },
      {
        "myfilter": "3094",
        "name": "309476",
        "label": "NAWABPUR"
      },
      {
        "myfilter": "3094",
        "name": "309485",
        "label": "SONAGAZI"
      },
      {
        "myfilter": "4643",
        "name": "464315",
        "label": "BABUCHHARA"
      },
      {
        "myfilter": "4643",
        "name": "464331",
        "label": "BOALKHALI"
      },
      {
        "myfilter": "4643",
        "name": "464347",
        "label": "DIGHINALA"
      },
      {
        "myfilter": "4643",
        "name": "464363",
        "label": "KABAKHALI"
      },
      {
        "myfilter": "4643",
        "name": "464379",
        "label": "MERUNG"
      },
      {
        "myfilter": "4649",
        "name": "464915",
        "label": "BHAIBONCHHARA"
      },
      {
        "myfilter": "4649",
        "name": "464925",
        "label": "GOLABARI"
      },
      {
        "myfilter": "4649",
        "name": "464947",
        "label": "KAMALCHHARI"
      },
      {
        "myfilter": "4649",
        "name": "464963",
        "label": "KHAGRACHHARI"
      },
      {
        "myfilter": "4649",
        "name": "464975",
        "label": "PERACHHARA"
      },
      {
        "myfilter": "4661",
        "name": "466123",
        "label": "BARMACHHARI"
      },
      {
        "myfilter": "4661",
        "name": "466147",
        "label": "DULYATALI"
      },
      {
        "myfilter": "4661",
        "name": "466171",
        "label": "LAKSHMICHHARI"
      },
      {
        "myfilter": "4665",
        "name": "466515",
        "label": "KAYANGGHAT"
      },
      {
        "myfilter": "4665",
        "name": "466531",
        "label": "MAHALCHHARI"
      },
      {
        "myfilter": "4665",
        "name": "466547",
        "label": "MASCHHARI"
      },
      {
        "myfilter": "4665",
        "name": "466563",
        "label": "MUBACHHARI"
      },
      {
        "myfilter": "4665",
        "name": "466579",
        "label": "SINDUKCHARI"
      },
      {
        "myfilter": "4667",
        "name": "466719",
        "label": "BATNATALI"
      },
      {
        "myfilter": "4667",
        "name": "466742",
        "label": "JUGGACHHALA"
      },
      {
        "myfilter": "4667",
        "name": "466763",
        "label": "MANIKCHHARI"
      },
      {
        "myfilter": "4667",
        "name": "466787",
        "label": "TINTAHARI"
      },
      {
        "myfilter": "4670",
        "name": "467013",
        "label": "AMTALI"
      },
      {
        "myfilter": "4670",
        "name": "467017",
        "label": "BARANAL"
      },
      {
        "myfilter": "4670",
        "name": "467023",
        "label": "BELCHHARI"
      },
      {
        "myfilter": "4670",
        "name": "467035",
        "label": "GUIMARA"
      },
      {
        "myfilter": "4670",
        "name": "467047",
        "label": "GUMTI"
      },
      {
        "myfilter": "4670",
        "name": "467059",
        "label": "MATIRANGA"
      },
      {
        "myfilter": "4670",
        "name": "467083",
        "label": "TAINDANG"
      },
      {
        "myfilter": "4670",
        "name": "467076",
        "label": "TUBALCHHARI"
      },
      {
        "myfilter": "4677",
        "name": "467719",
        "label": "CHENGI"
      },
      {
        "myfilter": "4677",
        "name": "467738",
        "label": "LATIBAN"
      },
      {
        "myfilter": "4677",
        "name": "467757",
        "label": "LOGANG"
      },
      {
        "myfilter": "4677",
        "name": "467776",
        "label": "PANCHHARI"
      },
      {
        "myfilter": "4677",
        "name": "467789",
        "label": "ULTACHHARI"
      },
      {
        "myfilter": "4680",
        "name": "468038",
        "label": "HAPCHHARI"
      },
      {
        "myfilter": "4680",
        "name": "468057",
        "label": "PATHACHHARA"
      },
      {
        "myfilter": "4680",
        "name": "468076",
        "label": "RAMGARH"
      },
      {
        "myfilter": "5133",
        "name": "513347",
        "label": "CHAR FALCON"
      },
      {
        "myfilter": "5133",
        "name": "513363",
        "label": "CHAR KADIRA"
      },
      {
        "myfilter": "5133",
        "name": "513371",
        "label": "CHAR KALKINI"
      },
      {
        "myfilter": "5133",
        "name": "513379",
        "label": "CHAR LAWRENCE"
      },
      {
        "myfilter": "5133",
        "name": "513381",
        "label": "CHAR MARTIN"
      },
      {
        "myfilter": "5133",
        "name": "513383",
        "label": "HAJIRHAT"
      },
      {
        "myfilter": "5133",
        "name": "513387",
        "label": "PATARIR HAT"
      },
      {
        "myfilter": "5133",
        "name": "513395",
        "label": "SAHEBERHAT"
      },
      {
        "myfilter": "5133",
        "name": "513391",
        "label": "TORABGANG"
      },
      {
        "myfilter": "5143",
        "name": "514313",
        "label": "BANGAKHA"
      },
      {
        "myfilter": "5143",
        "name": "514314",
        "label": "BASIKPUR"
      },
      {
        "myfilter": "5143",
        "name": "514315",
        "label": "BHABANIGANJ"
      },
      {
        "myfilter": "5143",
        "name": "514320",
        "label": "CHANDRAGANJ"
      },
      {
        "myfilter": "5143",
        "name": "514330",
        "label": "CHAR RUHITA"
      },
      {
        "myfilter": "5143",
        "name": "514323",
        "label": "CHARRAMANI MOHAN"
      },
      {
        "myfilter": "5143",
        "name": "514325",
        "label": "CHARSAI"
      },
      {
        "myfilter": "5143",
        "name": "514390",
        "label": "DAKSHIN HAMCHADI"
      },
      {
        "myfilter": "5143",
        "name": "514335",
        "label": "DALAL BAZAR"
      },
      {
        "myfilter": "5143",
        "name": "514340",
        "label": "DATTA PARA"
      },
      {
        "myfilter": "5143",
        "name": "514345",
        "label": "DIGHALI"
      },
      {
        "myfilter": "5143",
        "name": "514350",
        "label": "HAJIR PARA"
      },
      {
        "myfilter": "5143",
        "name": "514355",
        "label": "KUSHAKHALI"
      },
      {
        "myfilter": "5143",
        "name": "514360",
        "label": "LAHARKANDI"
      },
      {
        "myfilter": "5143",
        "name": "514370",
        "label": "MANDARI"
      },
      {
        "myfilter": "5143",
        "name": "514380",
        "label": "PARBATINAGAR"
      },
      {
        "myfilter": "5143",
        "name": "514385",
        "label": "SHAK CHAR"
      },
      {
        "myfilter": "5143",
        "name": "514387",
        "label": "TIARIGANJ"
      },
      {
        "myfilter": "5143",
        "name": "514389",
        "label": "TUM CHAR"
      },
      {
        "myfilter": "5143",
        "name": "514375",
        "label": "UTTAR HAMCHADI"
      },
      {
        "myfilter": "5143",
        "name": "514395",
        "label": "UTTAR JOYPUR"
      },
      {
        "myfilter": "5165",
        "name": "516513",
        "label": "BHADUR"
      },
      {
        "myfilter": "5165",
        "name": "516514",
        "label": "BHATRA"
      },
      {
        "myfilter": "5165",
        "name": "516519",
        "label": "BHOLAKOT"
      },
      {
        "myfilter": "5165",
        "name": "516523",
        "label": "CHANDIPUR"
      },
      {
        "myfilter": "5165",
        "name": "516533",
        "label": "DARBESHPUR"
      },
      {
        "myfilter": "5165",
        "name": "516538",
        "label": "ICHHAPUR"
      },
      {
        "myfilter": "5165",
        "name": "516542",
        "label": "KANCHANPUR"
      },
      {
        "myfilter": "5165",
        "name": "516547",
        "label": "KARPARA"
      },
      {
        "myfilter": "5165",
        "name": "516557",
        "label": "LAMCHAR"
      },
      {
        "myfilter": "5165",
        "name": "516566",
        "label": "NOAGAON"
      },
      {
        "myfilter": "5173",
        "name": "517313",
        "label": "BARA KHERI"
      },
      {
        "myfilter": "5173",
        "name": "517315",
        "label": "CHAR ABDULLAH"
      },
      {
        "myfilter": "5173",
        "name": "517323",
        "label": "CHAR ALEXANDAR"
      },
      {
        "myfilter": "5173",
        "name": "517331",
        "label": "CHAR ALGI"
      },
      {
        "myfilter": "5173",
        "name": "517339",
        "label": "CHAR BADAM"
      },
      {
        "myfilter": "5173",
        "name": "517355",
        "label": "CHAR GAZI"
      },
      {
        "myfilter": "5173",
        "name": "517365",
        "label": "CHAR PORAGACHHA"
      },
      {
        "myfilter": "5173",
        "name": "517387",
        "label": "CHAR RAMIZ"
      },
      {
        "myfilter": "5158",
        "name": "515811",
        "label": "BAMNI"
      },
      {
        "myfilter": "5158",
        "name": "515847",
        "label": "CHAR MOHANA"
      },
      {
        "myfilter": "5158",
        "name": "515852",
        "label": "CHAR PATA"
      },
      {
        "myfilter": "5158",
        "name": "515859",
        "label": "KEROA"
      },
      {
        "myfilter": "5158",
        "name": "515823",
        "label": "NORTH CHAR ABABIL"
      },
      {
        "myfilter": "5158",
        "name": "515835",
        "label": "NORTH CHAR BANGSHI"
      },
      {
        "myfilter": "5158",
        "name": "515871",
        "label": "ROYPUR"
      },
      {
        "myfilter": "5158",
        "name": "515883",
        "label": "SONAPUR"
      },
      {
        "myfilter": "5158",
        "name": "515828",
        "label": "SOUTH CHAR ABABIL"
      },
      {
        "myfilter": "5158",
        "name": "515838",
        "label": "SOUTH CHAR BANGSHI"
      },
      {
        "myfilter": "7507",
        "name": "750710",
        "label": "ALYERAPUR"
      },
      {
        "myfilter": "7507",
        "name": "750712",
        "label": "AMANULLAPUR"
      },
      {
        "myfilter": "7507",
        "name": "750724",
        "label": "BEGUMGANJ"
      },
      {
        "myfilter": "7507",
        "name": "750728",
        "label": "CHHAYANI"
      },
      {
        "myfilter": "7507",
        "name": "750738",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "7507",
        "name": "750742",
        "label": "EKLASHPUR"
      },
      {
        "myfilter": "7507",
        "name": "750745",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "7507",
        "name": "750752",
        "label": "HAJIPUR"
      },
      {
        "myfilter": "7507",
        "name": "750756",
        "label": "JIRTALI"
      },
      {
        "myfilter": "7507",
        "name": "750763",
        "label": "KADIRPUR"
      },
      {
        "myfilter": "7507",
        "name": "750766",
        "label": "KUTUBPUR"
      },
      {
        "myfilter": "7507",
        "name": "750770",
        "label": "MIR WARISHPUR"
      },
      {
        "myfilter": "7507",
        "name": "750749",
        "label": "NAROTTAMPUR"
      },
      {
        "myfilter": "7507",
        "name": "750780",
        "label": "RAJGANJ"
      },
      {
        "myfilter": "7507",
        "name": "750784",
        "label": "RASULPUR"
      },
      {
        "myfilter": "7507",
        "name": "750787",
        "label": "SHARIFPUR"
      },
      {
        "myfilter": "7510",
        "name": "751017",
        "label": "BADALKUT"
      },
      {
        "myfilter": "7510",
        "name": "751019",
        "label": "HATPUKURIA GHATLABAG"
      },
      {
        "myfilter": "7510",
        "name": "751028",
        "label": "KHIL PARA"
      },
      {
        "myfilter": "7510",
        "name": "751038",
        "label": "MOHAMMADPUR"
      },
      {
        "myfilter": "7510",
        "name": "751047",
        "label": "NAYAKHOLA"
      },
      {
        "myfilter": "7510",
        "name": "751057",
        "label": "PANCHGAON"
      },
      {
        "myfilter": "7510",
        "name": "751066",
        "label": "PARKOTE"
      },
      {
        "myfilter": "7510",
        "name": "751076",
        "label": "RAMNARAYANPUR"
      },
      {
        "myfilter": "7510",
        "name": "751085",
        "label": "SAHAPUR"
      },
      {
        "myfilter": "7521",
        "name": "752110",
        "label": "CHAR ELAHI"
      },
      {
        "myfilter": "7521",
        "name": "752111",
        "label": "CHAR FAKIRA"
      },
      {
        "myfilter": "7521",
        "name": "752123",
        "label": "CHAR HAZARI"
      },
      {
        "myfilter": "7521",
        "name": "752135",
        "label": "CHAR KAKRA"
      },
      {
        "myfilter": "7521",
        "name": "752147",
        "label": "CHAR PARBATI"
      },
      {
        "myfilter": "7521",
        "name": "752159",
        "label": "MUSAPUR"
      },
      {
        "myfilter": "7521",
        "name": "752171",
        "label": "RAMPUR"
      },
      {
        "myfilter": "7521",
        "name": "752183",
        "label": "SIRAJPUR"
      },
      {
        "myfilter": "7536",
        "name": "753615",
        "label": "BURIR CHAR"
      },
      {
        "myfilter": "7536",
        "name": "753619",
        "label": "CHANDNANDI"
      },
      {
        "myfilter": "7536",
        "name": "753628",
        "label": "CHAR ISHWAR"
      },
      {
        "myfilter": "7536",
        "name": "753638",
        "label": "CHAR KING"
      },
      {
        "myfilter": "7536",
        "name": "753647",
        "label": "HARNI"
      },
      {
        "myfilter": "7536",
        "name": "753657",
        "label": "JAHAJMARA"
      },
      {
        "myfilter": "7536",
        "name": "753666",
        "label": "NALCHIRA"
      },
      {
        "myfilter": "7536",
        "name": "753669",
        "label": "NIJUM DIP"
      },
      {
        "myfilter": "7536",
        "name": "753676",
        "label": "SONADIA"
      },
      {
        "myfilter": "7536",
        "name": "753685",
        "label": "SUKH CHAR"
      },
      {
        "myfilter": "7536",
        "name": "753695",
        "label": "TAMARUDDIN"
      },
      {
        "myfilter": "7547",
        "name": "754723",
        "label": "BATAIYA"
      },
      {
        "myfilter": "7547",
        "name": "754727",
        "label": "CHAP RASHIR HAT"
      },
      {
        "myfilter": "7547",
        "name": "754735",
        "label": "DHAN SHALIK"
      },
      {
        "myfilter": "7547",
        "name": "754745",
        "label": "DHAN SIRI"
      },
      {
        "myfilter": "7547",
        "name": "754755",
        "label": "GHOSHBAGH"
      },
      {
        "myfilter": "7547",
        "name": "754770",
        "label": "NAROTTAMPUR"
      },
      {
        "myfilter": "7547",
        "name": "754795",
        "label": "SUNDALPUR"
      },
      {
        "myfilter": "7587",
        "name": "758721",
        "label": "ANDERCHAR"
      },
      {
        "myfilter": "7587",
        "name": "758723",
        "label": "ASHWADIA"
      },
      {
        "myfilter": "7587",
        "name": "758725",
        "label": "BINODPUR"
      },
      {
        "myfilter": "7587",
        "name": "758740",
        "label": "CHAR MATUA"
      },
      {
        "myfilter": "7587",
        "name": "758745",
        "label": "DADPUR"
      },
      {
        "myfilter": "7587",
        "name": "758747",
        "label": "DHARMAPUR"
      },
      {
        "myfilter": "7587",
        "name": "758750",
        "label": "EWAZBALIA"
      },
      {
        "myfilter": "7587",
        "name": "758760",
        "label": "KADIR HANIF"
      },
      {
        "myfilter": "7587",
        "name": "758765",
        "label": "KALADARAF"
      },
      {
        "myfilter": "7587",
        "name": "758775",
        "label": "NIAZPUR"
      },
      {
        "myfilter": "7587",
        "name": "758780",
        "label": "NOAKHALI"
      },
      {
        "myfilter": "7587",
        "name": "758785",
        "label": "NOANNAI"
      },
      {
        "myfilter": "7587",
        "name": "758790",
        "label": "PURBA CHAR MATUA"
      },
      {
        "myfilter": "7580",
        "name": "758013",
        "label": "ARJUNTALA"
      },
      {
        "myfilter": "7580",
        "name": "758019",
        "label": "BEJOYBAGH"
      },
      {
        "myfilter": "7580",
        "name": "758028",
        "label": "CHHATARPAIA"
      },
      {
        "myfilter": "7580",
        "name": "758038",
        "label": "DUMURIA"
      },
      {
        "myfilter": "7580",
        "name": "758047",
        "label": "KABILPUR"
      },
      {
        "myfilter": "7580",
        "name": "758057",
        "label": "KADRA"
      },
      {
        "myfilter": "7580",
        "name": "758066",
        "label": "KESHARPAR"
      },
      {
        "myfilter": "7580",
        "name": "758076",
        "label": "MOHAMADPUR"
      },
      {
        "myfilter": "7580",
        "name": "758085",
        "label": "NABIPUR"
      },
      {
        "myfilter": "7583",
        "name": "758313",
        "label": "AMBARNAGAR"
      },
      {
        "myfilter": "7583",
        "name": "758315",
        "label": "AMISHA PARA"
      },
      {
        "myfilter": "7583",
        "name": "758317",
        "label": "BARAGAON"
      },
      {
        "myfilter": "7583",
        "name": "758321",
        "label": "BAZRA"
      },
      {
        "myfilter": "7583",
        "name": "758331",
        "label": "CHASHIRHAT"
      },
      {
        "myfilter": "7583",
        "name": "758335",
        "label": "DEOTI"
      },
      {
        "myfilter": "7583",
        "name": "758359",
        "label": "JAYAG"
      },
      {
        "myfilter": "7583",
        "name": "758373",
        "label": "NADANA"
      },
      {
        "myfilter": "7583",
        "name": "758377",
        "label": "NATESHWAR"
      },
      {
        "myfilter": "7583",
        "name": "758394",
        "label": "SONAPUR"
      },
      {
        "myfilter": "7585",
        "name": "758529",
        "label": "CHAR AMANULLAH"
      },
      {
        "myfilter": "7585",
        "name": "758531",
        "label": "CHAR BATA"
      },
      {
        "myfilter": "7585",
        "name": "758533",
        "label": "CHAR CLERK"
      },
      {
        "myfilter": "7585",
        "name": "758535",
        "label": "CHAR JABBAR"
      },
      {
        "myfilter": "7585",
        "name": "758536",
        "label": "CHAR JUBILLE"
      },
      {
        "myfilter": "7585",
        "name": "758537",
        "label": "CHAR WAPDA"
      },
      {
        "myfilter": "7585",
        "name": "758543",
        "label": "MOHAMMADPUR"
      },
      {
        "myfilter": "7585",
        "name": "758547",
        "label": "PURBA CHAR BATA"
      },
      {
        "myfilter": "8407",
        "name": "840710",
        "label": "AMTALI"
      },
      {
        "myfilter": "8407",
        "name": "840711",
        "label": "BAGHAI CHHARI"
      },
      {
        "myfilter": "8407",
        "name": "840723",
        "label": "BANGALTALI"
      },
      {
        "myfilter": "8407",
        "name": "840747",
        "label": "KEDARMARA"
      },
      {
        "myfilter": "8407",
        "name": "840759",
        "label": "MARISHYA"
      },
      {
        "myfilter": "8407",
        "name": "840771",
        "label": "RUPAKARI"
      },
      {
        "myfilter": "8407",
        "name": "840783",
        "label": "SAJEK"
      },
      {
        "myfilter": "8407",
        "name": "840735",
        "label": "SARBOATALI"
      },
      {
        "myfilter": "8421",
        "name": "842115",
        "label": "AIMA CHHARA"
      },
      {
        "myfilter": "8421",
        "name": "842131",
        "label": "BARA HARINA"
      },
      {
        "myfilter": "8421",
        "name": "842147",
        "label": "BARKAL"
      },
      {
        "myfilter": "8421",
        "name": "842163",
        "label": "BHUSHAN CHHARA"
      },
      {
        "myfilter": "8421",
        "name": "842179",
        "label": "SHUBLONG"
      },
      {
        "myfilter": "8429",
        "name": "842923",
        "label": "BELAI CHHARI"
      },
      {
        "myfilter": "8429",
        "name": "842947",
        "label": "FARUA"
      },
      {
        "myfilter": "8429",
        "name": "842971",
        "label": "KANGARA CHHARI"
      },
      {
        "myfilter": "8447",
        "name": "844719",
        "label": "BANJUGI CHHARA"
      },
      {
        "myfilter": "8447",
        "name": "844738",
        "label": "DUMDUMYA"
      },
      {
        "myfilter": "8447",
        "name": "844757",
        "label": "JURAI CHHARI"
      },
      {
        "myfilter": "8447",
        "name": "844776",
        "label": "MAIDANG"
      },
      {
        "myfilter": "8436",
        "name": "843619",
        "label": "CHANDRAGHONA"
      },
      {
        "myfilter": "8436",
        "name": "843638",
        "label": "CHITMARAM"
      },
      {
        "myfilter": "8436",
        "name": "843657",
        "label": "KAPTAI"
      },
      {
        "myfilter": "8436",
        "name": "843676",
        "label": "RAIKHALI"
      },
      {
        "myfilter": "8436",
        "name": "843686",
        "label": "WAGGA"
      },
      {
        "myfilter": "8425",
        "name": "842519",
        "label": "BETBUNIA"
      },
      {
        "myfilter": "8425",
        "name": "842538",
        "label": "FATIK CHHARI"
      },
      {
        "myfilter": "8425",
        "name": "842557",
        "label": "GHAGRA"
      },
      {
        "myfilter": "8425",
        "name": "842576",
        "label": "KALAMPATI"
      },
      {
        "myfilter": "8458",
        "name": "845813",
        "label": "ATARAK CHARA"
      },
      {
        "myfilter": "8458",
        "name": "845840",
        "label": "BAGACHATAR"
      },
      {
        "myfilter": "8458",
        "name": "845827",
        "label": "BHASANYA ADAM"
      },
      {
        "myfilter": "8458",
        "name": "845854",
        "label": "GULSHAKHALI"
      },
      {
        "myfilter": "8458",
        "name": "845860",
        "label": "KALAPAKURJYA"
      },
      {
        "myfilter": "8458",
        "name": "845867",
        "label": "LANGADU"
      },
      {
        "myfilter": "8458",
        "name": "845881",
        "label": "MAYANIMUKH"
      },
      {
        "myfilter": "8475",
        "name": "847519",
        "label": "BURIGHAT"
      },
      {
        "myfilter": "8475",
        "name": "847538",
        "label": "GHILA CHHARI"
      },
      {
        "myfilter": "8475",
        "name": "847557",
        "label": "NANIARCHAR"
      },
      {
        "myfilter": "8475",
        "name": "847576",
        "label": "SABEKHYONG"
      },
      {
        "myfilter": "8478",
        "name": "847823",
        "label": "BANGALHALIA"
      },
      {
        "myfilter": "8478",
        "name": "847871",
        "label": "GAINDA"
      },
      {
        "myfilter": "8478",
        "name": "847846",
        "label": "GHILA CHHARI"
      },
      {
        "myfilter": "8487",
        "name": "848727",
        "label": "BALUKHALI"
      },
      {
        "myfilter": "8487",
        "name": "848713",
        "label": "BANDUK BHANGA"
      },
      {
        "myfilter": "8487",
        "name": "848740",
        "label": "JIBTALI"
      },
      {
        "myfilter": "8487",
        "name": "848754",
        "label": "KUTUK CHHARI"
      },
      {
        "myfilter": "8487",
        "name": "848767",
        "label": "MAGBAN"
      },
      {
        "myfilter": "8487",
        "name": "848781",
        "label": "SAPCHHARI"
      },
      {
        "myfilter": "2614",
        "name": "261410",
        "label": "AMTA"
      },
      {
        "myfilter": "2614",
        "name": "261411",
        "label": "BAISAKANDA"
      },
      {
        "myfilter": "2614",
        "name": "261417",
        "label": "BALIA"
      },
      {
        "myfilter": "2614",
        "name": "261423",
        "label": "BHARARIA"
      },
      {
        "myfilter": "2614",
        "name": "261429",
        "label": "CHAUHAT"
      },
      {
        "myfilter": "2614",
        "name": "261435",
        "label": "DHAMRAI"
      },
      {
        "myfilter": "2614",
        "name": "261441",
        "label": "GANGUTIA"
      },
      {
        "myfilter": "2614",
        "name": "261447",
        "label": "JADABPUR"
      },
      {
        "myfilter": "2614",
        "name": "261453",
        "label": "KULLA"
      },
      {
        "myfilter": "2614",
        "name": "261459",
        "label": "KUSHURA"
      },
      {
        "myfilter": "2614",
        "name": "261465",
        "label": "NANNAR"
      },
      {
        "myfilter": "2614",
        "name": "261471",
        "label": "ROWAIL"
      },
      {
        "myfilter": "2614",
        "name": "261477",
        "label": "SANORA"
      },
      {
        "myfilter": "2614",
        "name": "261483",
        "label": "SOMBHAG"
      },
      {
        "myfilter": "2614",
        "name": "261488",
        "label": "SUAPUR"
      },
      {
        "myfilter": "2614",
        "name": "261494",
        "label": "SUTI PARA"
      },
      {
        "myfilter": "2618",
        "name": "261813",
        "label": "BILASPUR"
      },
      {
        "myfilter": "2618",
        "name": "261821",
        "label": "KUSHUMHATI"
      },
      {
        "myfilter": "2618",
        "name": "261831",
        "label": "MAHMUDPUR"
      },
      {
        "myfilter": "2618",
        "name": "261842",
        "label": "MUKSUDPUR"
      },
      {
        "myfilter": "2618",
        "name": "261852",
        "label": "NARISHA"
      },
      {
        "myfilter": "2618",
        "name": "261863",
        "label": "NAYABARI"
      },
      {
        "myfilter": "2618",
        "name": "261873",
        "label": "ROYPARA"
      },
      {
        "myfilter": "2618",
        "name": "261884",
        "label": "SUTAR PARA"
      },
      {
        "myfilter": "2638",
        "name": "263811",
        "label": "AGANAGAR"
      },
      {
        "myfilter": "2638",
        "name": "263813",
        "label": "BASTA"
      },
      {
        "myfilter": "2638",
        "name": "263817",
        "label": "HAZRATPUR"
      },
      {
        "myfilter": "2638",
        "name": "263825",
        "label": "KALATIA"
      },
      {
        "myfilter": "2638",
        "name": "263834",
        "label": "KALINDI"
      },
      {
        "myfilter": "2638",
        "name": "263843",
        "label": "KONDA"
      },
      {
        "myfilter": "2638",
        "name": "263851",
        "label": "RUHITPUR"
      },
      {
        "myfilter": "2638",
        "name": "263860",
        "label": "SAKTA"
      },
      {
        "myfilter": "2638",
        "name": "263869",
        "label": "SUBHADYA"
      },
      {
        "myfilter": "2638",
        "name": "263877",
        "label": "TARANAGAR"
      },
      {
        "myfilter": "2638",
        "name": "263886",
        "label": "TEGHARIA"
      },
      {
        "myfilter": "2638",
        "name": "263894",
        "label": "ZINJIRA"
      },
      {
        "myfilter": "2662",
        "name": "266211",
        "label": "AGLA"
      },
      {
        "myfilter": "2662",
        "name": "266213",
        "label": "BAKSHANAGAR"
      },
      {
        "myfilter": "2662",
        "name": "266220",
        "label": "BANDURA"
      },
      {
        "myfilter": "2662",
        "name": "266227",
        "label": "BARRAH"
      },
      {
        "myfilter": "2662",
        "name": "266233",
        "label": "BARUAKHALI"
      },
      {
        "myfilter": "2662",
        "name": "266240",
        "label": "CHURAIN"
      },
      {
        "myfilter": "2662",
        "name": "266247",
        "label": "GALIMPUR"
      },
      {
        "myfilter": "2662",
        "name": "266254",
        "label": "JANTRAIL"
      },
      {
        "myfilter": "2662",
        "name": "266261",
        "label": "JOYKRISHNAPUR"
      },
      {
        "myfilter": "2662",
        "name": "266267",
        "label": "KAILAIL"
      },
      {
        "myfilter": "2662",
        "name": "266274",
        "label": "KALAKOPA"
      },
      {
        "myfilter": "2662",
        "name": "266281",
        "label": "NAYANSREE"
      },
      {
        "myfilter": "2662",
        "name": "266288",
        "label": "SHIKARI PARA"
      },
      {
        "myfilter": "2662",
        "name": "266294",
        "label": "SHOLLA"
      },
      {
        "myfilter": "2672",
        "name": "267215",
        "label": "AMIN BAZAR"
      },
      {
        "myfilter": "2672",
        "name": "267218",
        "label": "ASHULIA"
      },
      {
        "myfilter": "2672",
        "name": "267222",
        "label": "BANAGRAM"
      },
      {
        "myfilter": "2672",
        "name": "267227",
        "label": "BHAKURTA"
      },
      {
        "myfilter": "2672",
        "name": "267233",
        "label": "BIRALIA"
      },
      {
        "myfilter": "2672",
        "name": "267239",
        "label": "DHAMSANA"
      },
      {
        "myfilter": "2672",
        "name": "267250",
        "label": "KAUNDIA"
      },
      {
        "myfilter": "2672",
        "name": "267272",
        "label": "PATHALIA"
      },
      {
        "myfilter": "2672",
        "name": "267278",
        "label": "SAVAR"
      },
      {
        "myfilter": "2672",
        "name": "267298",
        "label": "SAVAR CANTOMENT"
      },
      {
        "myfilter": "2672",
        "name": "267283",
        "label": "SHIMULIA"
      },
      {
        "myfilter": "2672",
        "name": "267289",
        "label": "TETULJHORA"
      },
      {
        "myfilter": "2672",
        "name": "267294",
        "label": "YEARPUR"
      },
      {
        "myfilter": "2604",
        "name": "260413",
        "label": "BADDA"
      },
      {
        "myfilter": "2604",
        "name": "260419",
        "label": "BERAID"
      },
      {
        "myfilter": "2604",
        "name": "260457",
        "label": "BHATARA"
      },
      {
        "myfilter": "2604",
        "name": "260482",
        "label": "SATARKUL"
      },
      {
        "myfilter": "2668",
        "name": "266860",
        "label": "DAKSHINGAON (PART)"
      },
      {
        "myfilter": "2668",
        "name": "266882",
        "label": "MANDA"
      },
      {
        "myfilter": "2693",
        "name": "269351",
        "label": "HARIRAMPUR"
      },
      {
        "myfilter": "2696",
        "name": "269676",
        "label": "UTTAR KHAN"
      },
      {
        "myfilter": "2606",
        "name": "260638",
        "label": "DAKSHINKHAN(PART)"
      },
      {
        "myfilter": "2610",
        "name": "261038",
        "label": "DAKSHINKHAN(PART)"
      },
      {
        "myfilter": "2612",
        "name": "261265",
        "label": "DEMRA"
      },
      {
        "myfilter": "2612",
        "name": "261280",
        "label": "MATUAIL (PART)"
      },
      {
        "myfilter": "2612",
        "name": "261293",
        "label": "SARALIA"
      },
      {
        "myfilter": "2629",
        "name": "262935",
        "label": "DHANIA (PART)"
      },
      {
        "myfilter": "2629",
        "name": "262980",
        "label": "MATUAIL (PART)"
      },
      {
        "myfilter": "2632",
        "name": "263295",
        "label": "SHYAMPUR"
      },
      {
        "myfilter": "2634",
        "name": "263451",
        "label": "SULTANGANJ"
      },
      {
        "myfilter": "2636",
        "name": "263660",
        "label": "DAKSHINGAON (PART)"
      },
      {
        "myfilter": "2636",
        "name": "263685",
        "label": "NASIRABAD"
      },
      {
        "myfilter": "2637",
        "name": "263738",
        "label": "DAKSHINKHAN (PART)"
      },
      {
        "myfilter": "2637",
        "name": "263749",
        "label": "DUMNI"
      },
      {
        "myfilter": "2903",
        "name": "290310",
        "label": "ALFADANGA"
      },
      {
        "myfilter": "2903",
        "name": "290321",
        "label": "BANA"
      },
      {
        "myfilter": "2903",
        "name": "290331",
        "label": "BURAICH"
      },
      {
        "myfilter": "2903",
        "name": "290342",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "2903",
        "name": "290352",
        "label": "PANCHURIA"
      },
      {
        "myfilter": "2903",
        "name": "290384",
        "label": "TAGARBANDA"
      },
      {
        "myfilter": "2910",
        "name": "291013",
        "label": "ALGI"
      },
      {
        "myfilter": "2910",
        "name": "291015",
        "label": "AZIMNAGAR"
      },
      {
        "myfilter": "2910",
        "name": "291031",
        "label": "CHANDRA"
      },
      {
        "myfilter": "2910",
        "name": "291025",
        "label": "CHUMORDI"
      },
      {
        "myfilter": "2910",
        "name": "291039",
        "label": "GHARUA"
      },
      {
        "myfilter": "2910",
        "name": "291047",
        "label": "HAMIRDI"
      },
      {
        "myfilter": "2910",
        "name": "291055",
        "label": "KALAMRIDHA"
      },
      {
        "myfilter": "2910",
        "name": "291063",
        "label": "KAOLIBERA"
      },
      {
        "myfilter": "2910",
        "name": "291071",
        "label": "MANIKDAHA"
      },
      {
        "myfilter": "2910",
        "name": "291079",
        "label": "NASIRABAD"
      },
      {
        "myfilter": "2910",
        "name": "291087",
        "label": "NURULLAGANJ"
      },
      {
        "myfilter": "2910",
        "name": "291094",
        "label": "TUZARPUR"
      },
      {
        "myfilter": "2918",
        "name": "291815",
        "label": "BOALMARI"
      },
      {
        "myfilter": "2918",
        "name": "291820",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "2918",
        "name": "291825",
        "label": "CHATUL"
      },
      {
        "myfilter": "2918",
        "name": "291830",
        "label": "DADPUR"
      },
      {
        "myfilter": "2918",
        "name": "291835",
        "label": "GHOSHPUR"
      },
      {
        "myfilter": "2918",
        "name": "291840",
        "label": "GUNBAHA"
      },
      {
        "myfilter": "2918",
        "name": "291860",
        "label": "MOYNA"
      },
      {
        "myfilter": "2918",
        "name": "291875",
        "label": "PARAMESHWARDI"
      },
      {
        "myfilter": "2918",
        "name": "291885",
        "label": "RUPAPAT"
      },
      {
        "myfilter": "2918",
        "name": "291890",
        "label": "SATAIR"
      },
      {
        "myfilter": "2918",
        "name": "291895",
        "label": "SHEKHAR"
      },
      {
        "myfilter": "2921",
        "name": "292119",
        "label": "CHAR BHADRASAN"
      },
      {
        "myfilter": "2921",
        "name": "292138",
        "label": "CHAR HARIRAMPUR"
      },
      {
        "myfilter": "2921",
        "name": "292157",
        "label": "CHAR JHAUKANDA"
      },
      {
        "myfilter": "2921",
        "name": "292176",
        "label": "GAZIRTEK"
      },
      {
        "myfilter": "2947",
        "name": "294713",
        "label": "ALIABAD"
      },
      {
        "myfilter": "2947",
        "name": "294715",
        "label": "AMBIKAPUR"
      },
      {
        "myfilter": "2947",
        "name": "294723",
        "label": "CHAR MADHABDIA"
      },
      {
        "myfilter": "2947",
        "name": "294731",
        "label": "DECREERCHAR"
      },
      {
        "myfilter": "2947",
        "name": "294739",
        "label": "GREDA"
      },
      {
        "myfilter": "2947",
        "name": "294747",
        "label": "ISHAN GOPALPUR"
      },
      {
        "myfilter": "2947",
        "name": "294755",
        "label": "KAIJURI"
      },
      {
        "myfilter": "2947",
        "name": "294763",
        "label": "KANAIPUR"
      },
      {
        "myfilter": "2947",
        "name": "294771",
        "label": "KRISHNANAGAR"
      },
      {
        "myfilter": "2947",
        "name": "294779",
        "label": "MAJCHAR"
      },
      {
        "myfilter": "2947",
        "name": "294787",
        "label": "UTTAR CHANNEL"
      },
      {
        "myfilter": "2956",
        "name": "295613",
        "label": "ARPARA"
      },
      {
        "myfilter": "2956",
        "name": "295610",
        "label": "BAGAT"
      },
      {
        "myfilter": "2956",
        "name": "295621",
        "label": "DUMAIN"
      },
      {
        "myfilter": "2956",
        "name": "295631",
        "label": "GAJNA"
      },
      {
        "myfilter": "2956",
        "name": "295637",
        "label": "JAHAPUR"
      },
      {
        "myfilter": "2956",
        "name": "295642",
        "label": "KAMARKHALI"
      },
      {
        "myfilter": "2956",
        "name": "295647",
        "label": "KORAKDI"
      },
      {
        "myfilter": "2956",
        "name": "295652",
        "label": "MADHUKHALI"
      },
      {
        "myfilter": "2956",
        "name": "295663",
        "label": "MEGCHAMI"
      },
      {
        "myfilter": "2956",
        "name": "295673",
        "label": "NOAPARA"
      },
      {
        "myfilter": "2956",
        "name": "295684",
        "label": "RAIPUR"
      },
      {
        "myfilter": "2962",
        "name": "296222",
        "label": "CHAR JASORDI"
      },
      {
        "myfilter": "2962",
        "name": "296227",
        "label": "DANGI"
      },
      {
        "myfilter": "2962",
        "name": "296250",
        "label": "KAICHAIL"
      },
      {
        "myfilter": "2962",
        "name": "296267",
        "label": "KODALIA SHOHIDNAGAR"
      },
      {
        "myfilter": "2962",
        "name": "296255",
        "label": "LASKARDIA"
      },
      {
        "myfilter": "2962",
        "name": "296233",
        "label": "PHULSUTI"
      },
      {
        "myfilter": "2962",
        "name": "296272",
        "label": "PURA PARA"
      },
      {
        "myfilter": "2962",
        "name": "296283",
        "label": "RAMNAGAR"
      },
      {
        "myfilter": "2962",
        "name": "296294",
        "label": "TALMA"
      },
      {
        "myfilter": "2984",
        "name": "298415",
        "label": "AKTER CHAR"
      },
      {
        "myfilter": "2984",
        "name": "298419",
        "label": "BHASHANCHAR"
      },
      {
        "myfilter": "2984",
        "name": "298428",
        "label": "CHAR BISHNUPUR"
      },
      {
        "myfilter": "2984",
        "name": "298438",
        "label": "CHAR MANAIR"
      },
      {
        "myfilter": "2984",
        "name": "298447",
        "label": "CHAR NASIRPUR"
      },
      {
        "myfilter": "2984",
        "name": "298457",
        "label": "DHEUKHALI"
      },
      {
        "myfilter": "2984",
        "name": "298466",
        "label": "KRISHNAPUR"
      },
      {
        "myfilter": "2984",
        "name": "298476",
        "label": "NARIKELBARIA"
      },
      {
        "myfilter": "2984",
        "name": "298485",
        "label": "SADARPUR"
      },
      {
        "myfilter": "2990",
        "name": "299010",
        "label": "ATGHAR"
      },
      {
        "myfilter": "2990",
        "name": "299011",
        "label": "BALLABHDI"
      },
      {
        "myfilter": "2990",
        "name": "299016",
        "label": "BHAWAL"
      },
      {
        "myfilter": "2990",
        "name": "299039",
        "label": "GATTI"
      },
      {
        "myfilter": "2990",
        "name": "299044",
        "label": "JADUNANDI"
      },
      {
        "myfilter": "2990",
        "name": "299061",
        "label": "MAJHARDIA"
      },
      {
        "myfilter": "2990",
        "name": "299078",
        "label": "RAMKANTAPUR"
      },
      {
        "myfilter": "2990",
        "name": "299089",
        "label": "SONAPUR"
      },
      {
        "myfilter": "3330",
        "name": "333025",
        "label": "BARIA"
      },
      {
        "myfilter": "3330",
        "name": "333028",
        "label": "BHAWALGARH"
      },
      {
        "myfilter": "3330",
        "name": "333098",
        "label": "GAZIPUR CANT."
      },
      {
        "myfilter": "3330",
        "name": "333067",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "3330",
        "name": "333070",
        "label": "PIRUJALI"
      },
      {
        "myfilter": "3332",
        "name": "333213",
        "label": "ATABAHA"
      },
      {
        "myfilter": "3332",
        "name": "333219",
        "label": "BOALI"
      },
      {
        "myfilter": "3332",
        "name": "333228",
        "label": "CHAPAIR"
      },
      {
        "myfilter": "3332",
        "name": "333238",
        "label": "DHALJORA"
      },
      {
        "myfilter": "3332",
        "name": "333247",
        "label": "FULBARIA"
      },
      {
        "myfilter": "3332",
        "name": "333257",
        "label": "MADHYAPARA"
      },
      {
        "myfilter": "3332",
        "name": "333266",
        "label": "MOUCHAK"
      },
      {
        "myfilter": "3332",
        "name": "333276",
        "label": "SREEFALTALI"
      },
      {
        "myfilter": "3332",
        "name": "333285",
        "label": "SUTRAPUR"
      },
      {
        "myfilter": "3334",
        "name": "333415",
        "label": "BAHADURSADI"
      },
      {
        "myfilter": "3334",
        "name": "333417",
        "label": "BAKTARPUR"
      },
      {
        "myfilter": "3334",
        "name": "333460",
        "label": "JAMALPUR"
      },
      {
        "myfilter": "3334",
        "name": "333469",
        "label": "JANGALIA"
      },
      {
        "myfilter": "3334",
        "name": "333494",
        "label": "MOKTARPUR"
      },
      {
        "myfilter": "3334",
        "name": "333496",
        "label": "NAGARI"
      },
      {
        "myfilter": "3334",
        "name": "333497",
        "label": "TUMULIA"
      },
      {
        "myfilter": "3336",
        "name": "333613",
        "label": "BARISHABA"
      },
      {
        "myfilter": "3336",
        "name": "333617",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "3336",
        "name": "333625",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "3336",
        "name": "333634",
        "label": "GHAGOTIA"
      },
      {
        "myfilter": "3336",
        "name": "333643",
        "label": "KAPASIA"
      },
      {
        "myfilter": "3336",
        "name": "333651",
        "label": "KARIHATA"
      },
      {
        "myfilter": "3336",
        "name": "333660",
        "label": "RAYED"
      },
      {
        "myfilter": "3336",
        "name": "333669",
        "label": "SANMANIA"
      },
      {
        "myfilter": "3336",
        "name": "333677",
        "label": "SINGASREE"
      },
      {
        "myfilter": "3336",
        "name": "333686",
        "label": "TARGAON"
      },
      {
        "myfilter": "3336",
        "name": "333694",
        "label": "TOKE"
      },
      {
        "myfilter": "3386",
        "name": "338621",
        "label": "BARMI"
      },
      {
        "myfilter": "3386",
        "name": "338625",
        "label": "GAZIPUR"
      },
      {
        "myfilter": "3386",
        "name": "338628",
        "label": "GOSINGA"
      },
      {
        "myfilter": "3386",
        "name": "338638",
        "label": "KAORAID"
      },
      {
        "myfilter": "3386",
        "name": "338647",
        "label": "MAONA"
      },
      {
        "myfilter": "3386",
        "name": "338657",
        "label": "PRAHLADPUR"
      },
      {
        "myfilter": "3386",
        "name": "338666",
        "label": "RAJABARI"
      },
      {
        "myfilter": "3386",
        "name": "338685",
        "label": "TELIHATI"
      },
      {
        "myfilter": "3532",
        "name": "353213",
        "label": "BAULTALI"
      },
      {
        "myfilter": "3532",
        "name": "353211",
        "label": "BORASI"
      },
      {
        "myfilter": "3532",
        "name": "353215",
        "label": "CHANDRA DIGHALIA"
      },
      {
        "myfilter": "3532",
        "name": "353217",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "3532",
        "name": "353221",
        "label": "GOBRA"
      },
      {
        "myfilter": "3532",
        "name": "353230",
        "label": "GOPINATHPUR"
      },
      {
        "myfilter": "3532",
        "name": "353234",
        "label": "HARIDASPUR"
      },
      {
        "myfilter": "3532",
        "name": "353238",
        "label": "JALALABAD"
      },
      {
        "myfilter": "3532",
        "name": "353243",
        "label": "KAJULIA"
      },
      {
        "myfilter": "3532",
        "name": "353247",
        "label": "KARPARA"
      },
      {
        "myfilter": "3532",
        "name": "353251",
        "label": "KATI"
      },
      {
        "myfilter": "3532",
        "name": "353256",
        "label": "LATIFPUR"
      },
      {
        "myfilter": "3532",
        "name": "353260",
        "label": "MAJHIGATI"
      },
      {
        "myfilter": "3532",
        "name": "353264",
        "label": "NIZRA"
      },
      {
        "myfilter": "3532",
        "name": "353269",
        "label": "PAIKKANDI"
      },
      {
        "myfilter": "3532",
        "name": "353273",
        "label": "RAGHUNATHPUR"
      },
      {
        "myfilter": "3532",
        "name": "353277",
        "label": "SAHAPUR"
      },
      {
        "myfilter": "3532",
        "name": "353282",
        "label": "SATPAR"
      },
      {
        "myfilter": "3532",
        "name": "353286",
        "label": "SUKTAIL"
      },
      {
        "myfilter": "3532",
        "name": "353290",
        "label": "ULPUR"
      },
      {
        "myfilter": "3532",
        "name": "353294",
        "label": "URAFI"
      },
      {
        "myfilter": "3543",
        "name": "354311",
        "label": "BETHURI"
      },
      {
        "myfilter": "3543",
        "name": "354313",
        "label": "FUKURA"
      },
      {
        "myfilter": "3543",
        "name": "354320",
        "label": "HATIARA"
      },
      {
        "myfilter": "3543",
        "name": "354327",
        "label": "KASHIANI"
      },
      {
        "myfilter": "3543",
        "name": "354340",
        "label": "MAHESHPUR"
      },
      {
        "myfilter": "3543",
        "name": "354333",
        "label": "MAMUDPUR"
      },
      {
        "myfilter": "3543",
        "name": "354347",
        "label": "NIJAMKANDI"
      },
      {
        "myfilter": "3543",
        "name": "354354",
        "label": "ORAKANDI"
      },
      {
        "myfilter": "3543",
        "name": "354361",
        "label": "PARULIA"
      },
      {
        "myfilter": "3543",
        "name": "354367",
        "label": "PUISUR"
      },
      {
        "myfilter": "3543",
        "name": "354374",
        "label": "RAJPAT"
      },
      {
        "myfilter": "3543",
        "name": "354381",
        "label": "RATAIL"
      },
      {
        "myfilter": "3543",
        "name": "354388",
        "label": "SAJAIL"
      },
      {
        "myfilter": "3543",
        "name": "354394",
        "label": "SINGA"
      },
      {
        "myfilter": "3551",
        "name": "355113",
        "label": "AMTALI"
      },
      {
        "myfilter": "3551",
        "name": "355115",
        "label": "BANDHABARI"
      },
      {
        "myfilter": "3551",
        "name": "355123",
        "label": "GHAGAR"
      },
      {
        "myfilter": "3551",
        "name": "355131",
        "label": "HIRAN"
      },
      {
        "myfilter": "3551",
        "name": "355139",
        "label": "KALABARI"
      },
      {
        "myfilter": "3551",
        "name": "355147",
        "label": "KANDI"
      },
      {
        "myfilter": "3551",
        "name": "355155",
        "label": "KUSHLA"
      },
      {
        "myfilter": "3551",
        "name": "355163",
        "label": "PINJURI"
      },
      {
        "myfilter": "3551",
        "name": "355171",
        "label": "RADHAGANJ"
      },
      {
        "myfilter": "3551",
        "name": "355179",
        "label": "RAMSHIL"
      },
      {
        "myfilter": "3551",
        "name": "355187",
        "label": "SADULLAPUR"
      },
      {
        "myfilter": "3551",
        "name": "355194",
        "label": "SUAGRAM"
      },
      {
        "myfilter": "3558",
        "name": "355811",
        "label": "BAHUGRAM"
      },
      {
        "myfilter": "3558",
        "name": "355816",
        "label": "BANSHBARIA"
      },
      {
        "myfilter": "3558",
        "name": "355822",
        "label": "BATIKAMARI"
      },
      {
        "myfilter": "3558",
        "name": "355810",
        "label": "BHABRASUR"
      },
      {
        "myfilter": "3558",
        "name": "355827",
        "label": "DIGNAGAR"
      },
      {
        "myfilter": "3558",
        "name": "355833",
        "label": "GOBINDAPUR"
      },
      {
        "myfilter": "3558",
        "name": "355839",
        "label": "GOHALA"
      },
      {
        "myfilter": "3558",
        "name": "355844",
        "label": "JALIRPAR"
      },
      {
        "myfilter": "3558",
        "name": "355850",
        "label": "KASALIA"
      },
      {
        "myfilter": "3558",
        "name": "355855",
        "label": "KHANDARPAR"
      },
      {
        "myfilter": "3558",
        "name": "355861",
        "label": "MAHARAJPUR"
      },
      {
        "myfilter": "3558",
        "name": "355867",
        "label": "MOCHNA"
      },
      {
        "myfilter": "3558",
        "name": "355872",
        "label": "NANIKSHIR"
      },
      {
        "myfilter": "3558",
        "name": "355878",
        "label": "PASARGATI"
      },
      {
        "myfilter": "3558",
        "name": "355883",
        "label": "RAGHDI"
      },
      {
        "myfilter": "3558",
        "name": "355894",
        "label": "UJANI"
      },
      {
        "myfilter": "3591",
        "name": "359119",
        "label": "BARNI"
      },
      {
        "myfilter": "3591",
        "name": "359128",
        "label": "DUMURIA"
      },
      {
        "myfilter": "3591",
        "name": "359138",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "3591",
        "name": "359166",
        "label": "KUSHLI"
      },
      {
        "myfilter": "3591",
        "name": "359176",
        "label": "PATGATI DISPLAY MEMORY"
      },
      {
        "myfilter": "3907",
        "name": "390711",
        "label": "BAGAR CHAR"
      },
      {
        "myfilter": "3907",
        "name": "390723",
        "label": "BAKSHIGANJ"
      },
      {
        "myfilter": "3907",
        "name": "390735",
        "label": "BATTAJORE"
      },
      {
        "myfilter": "3907",
        "name": "390747",
        "label": "DHANUA"
      },
      {
        "myfilter": "3907",
        "name": "390759",
        "label": "MERUR CHAR"
      },
      {
        "myfilter": "3907",
        "name": "390771",
        "label": "NILAKSHMIA"
      },
      {
        "myfilter": "3907",
        "name": "390783",
        "label": "SADHUR PARA"
      },
      {
        "myfilter": "3915",
        "name": "391517",
        "label": "BAHADURABAD"
      },
      {
        "myfilter": "3915",
        "name": "391529",
        "label": "CHAR AOMKHAOA"
      },
      {
        "myfilter": "3915",
        "name": "391536",
        "label": "CHIKAJANI"
      },
      {
        "myfilter": "3915",
        "name": "391543",
        "label": "CHUKAIBARI"
      },
      {
        "myfilter": "3915",
        "name": "391551",
        "label": "DANGDHARA"
      },
      {
        "myfilter": "3915",
        "name": "391558",
        "label": "DEWANGANJ UNION"
      },
      {
        "myfilter": "3915",
        "name": "391565",
        "label": "HATEBHANGA"
      },
      {
        "myfilter": "3915",
        "name": "391587",
        "label": "PAR RAMRAMPUR"
      },
      {
        "myfilter": "3929",
        "name": "392913",
        "label": "BELGACHHA"
      },
      {
        "myfilter": "3929",
        "name": "392915",
        "label": "CHAR GOALINI"
      },
      {
        "myfilter": "3929",
        "name": "392923",
        "label": "CHAR PUTIMARI"
      },
      {
        "myfilter": "3929",
        "name": "392931",
        "label": "CHINADULLI"
      },
      {
        "myfilter": "3929",
        "name": "392939",
        "label": "GAIBANDHA"
      },
      {
        "myfilter": "3929",
        "name": "392947",
        "label": "GOALER CHAR"
      },
      {
        "myfilter": "3929",
        "name": "392955",
        "label": "ISLAMPUR"
      },
      {
        "myfilter": "3929",
        "name": "392963",
        "label": "KULKANDI"
      },
      {
        "myfilter": "3929",
        "name": "392971",
        "label": "NOARPARA"
      },
      {
        "myfilter": "3929",
        "name": "392979",
        "label": "PALBANDHA"
      },
      {
        "myfilter": "3929",
        "name": "392987",
        "label": "PATHARSI"
      },
      {
        "myfilter": "3929",
        "name": "392994",
        "label": "SAPDHARI"
      },
      {
        "myfilter": "3936",
        "name": "393613",
        "label": "BANSHCHARA"
      },
      {
        "myfilter": "3936",
        "name": "393619",
        "label": "DIGPAITH"
      },
      {
        "myfilter": "3936",
        "name": "393617",
        "label": "GHORADHAP"
      },
      {
        "myfilter": "3936",
        "name": "393623",
        "label": "ITAIL"
      },
      {
        "myfilter": "3936",
        "name": "393635",
        "label": "KENDUA"
      },
      {
        "myfilter": "3936",
        "name": "393641",
        "label": "LAKSHMIR CHAR"
      },
      {
        "myfilter": "3936",
        "name": "393647",
        "label": "MESHTA"
      },
      {
        "myfilter": "3936",
        "name": "393653",
        "label": "NARUNDI"
      },
      {
        "myfilter": "3936",
        "name": "393659",
        "label": "RANAGACHHA"
      },
      {
        "myfilter": "3936",
        "name": "393665",
        "label": "RASHIDPUR"
      },
      {
        "myfilter": "3936",
        "name": "393671",
        "label": "SAHABAJPUR"
      },
      {
        "myfilter": "3936",
        "name": "393677",
        "label": "SHARIFPUR"
      },
      {
        "myfilter": "3936",
        "name": "393683",
        "label": "SREEPUR"
      },
      {
        "myfilter": "3936",
        "name": "393689",
        "label": "TITPALLA"
      },
      {
        "myfilter": "3936",
        "name": "393695",
        "label": "TULSIR CHAR"
      },
      {
        "myfilter": "3958",
        "name": "395811",
        "label": "ADARBHITA"
      },
      {
        "myfilter": "3958",
        "name": "395823",
        "label": "BALIJURI"
      },
      {
        "myfilter": "3958",
        "name": "395835",
        "label": "CHAR PAKERDAHA"
      },
      {
        "myfilter": "3958",
        "name": "395847",
        "label": "GUNARITALA"
      },
      {
        "myfilter": "3958",
        "name": "395859",
        "label": "JOREKHALI UNION"
      },
      {
        "myfilter": "3958",
        "name": "395871",
        "label": "KARAICHARA"
      },
      {
        "myfilter": "3958",
        "name": "395883",
        "label": "SIDHULI"
      },
      {
        "myfilter": "3961",
        "name": "396117",
        "label": "ADRA"
      },
      {
        "myfilter": "3961",
        "name": "396119",
        "label": "CHAR BANIPAKURI UNION"
      },
      {
        "myfilter": "3961",
        "name": "396128",
        "label": "DURMUT"
      },
      {
        "myfilter": "3961",
        "name": "396138",
        "label": "FULKOCHA"
      },
      {
        "myfilter": "3961",
        "name": "396147",
        "label": "GHOSHER PARA"
      },
      {
        "myfilter": "3961",
        "name": "396157",
        "label": "JHAUGARA"
      },
      {
        "myfilter": "3961",
        "name": "396166",
        "label": "KULIA"
      },
      {
        "myfilter": "3961",
        "name": "396176",
        "label": "MAHMUDPUR"
      },
      {
        "myfilter": "3961",
        "name": "396185",
        "label": "NANGLA"
      },
      {
        "myfilter": "3961",
        "name": "396195",
        "label": "NAYANAGAR"
      },
      {
        "myfilter": "3961",
        "name": "396197",
        "label": "SHAYMPUR"
      },
      {
        "myfilter": "3985",
        "name": "398510",
        "label": "AONA"
      },
      {
        "myfilter": "3985",
        "name": "398521",
        "label": "BHATARA"
      },
      {
        "myfilter": "3985",
        "name": "398531",
        "label": "DOAIL"
      },
      {
        "myfilter": "3985",
        "name": "398542",
        "label": "KAMRABAD"
      },
      {
        "myfilter": "3985",
        "name": "398552",
        "label": "MAHADAN"
      },
      {
        "myfilter": "3985",
        "name": "398563",
        "label": "PINGNA"
      },
      {
        "myfilter": "3985",
        "name": "398573",
        "label": "POGALDIGHA"
      },
      {
        "myfilter": "3985",
        "name": "398584",
        "label": "SATPOA"
      },
      {
        "myfilter": "4802",
        "name": "480211",
        "label": "ADAMPUR"
      },
      {
        "myfilter": "4802",
        "name": "480223",
        "label": "AUSTAGRAM"
      },
      {
        "myfilter": "4802",
        "name": "480235",
        "label": "BANGAL PARA"
      },
      {
        "myfilter": "4802",
        "name": "480247",
        "label": "DEOGHAR"
      },
      {
        "myfilter": "4802",
        "name": "480259",
        "label": "KALMA"
      },
      {
        "myfilter": "4802",
        "name": "480271",
        "label": "KASTAIL"
      },
      {
        "myfilter": "4802",
        "name": "480283",
        "label": "KHAYERPUR ABDULLAHPUR"
      },
      {
        "myfilter": "4802",
        "name": "480291",
        "label": "PURBA AUSTAGRAM"
      },
      {
        "myfilter": "4806",
        "name": "480617",
        "label": "BALIARDI"
      },
      {
        "myfilter": "4806",
        "name": "480625",
        "label": "DIGHIRPAR"
      },
      {
        "myfilter": "4806",
        "name": "480634",
        "label": "DILALPUR"
      },
      {
        "myfilter": "4806",
        "name": "480643",
        "label": "GAZIR CHAR"
      },
      {
        "myfilter": "4806",
        "name": "480651",
        "label": "HALIMPUR"
      },
      {
        "myfilter": "4806",
        "name": "480660",
        "label": "HILACHIA"
      },
      {
        "myfilter": "4806",
        "name": "480669",
        "label": "HUMAIPUR"
      },
      {
        "myfilter": "4806",
        "name": "480672",
        "label": "KAILAG"
      },
      {
        "myfilter": "4806",
        "name": "480677",
        "label": "MAIJ CHAR"
      },
      {
        "myfilter": "4806",
        "name": "480686",
        "label": "PIRIJPUR"
      },
      {
        "myfilter": "4806",
        "name": "480694",
        "label": "SARAR CHAR"
      },
      {
        "myfilter": "4811",
        "name": "481121",
        "label": "AGANAGAR"
      },
      {
        "myfilter": "4811",
        "name": "481135",
        "label": "GAZARIA"
      },
      {
        "myfilter": "4811",
        "name": "481147",
        "label": "KALIKA PRASAD"
      },
      {
        "myfilter": "4811",
        "name": "481159",
        "label": "SADAKPUR"
      },
      {
        "myfilter": "4811",
        "name": "481171",
        "label": "SHIBPUR"
      },
      {
        "myfilter": "4811",
        "name": "481183",
        "label": "SHIMULKANDI"
      },
      {
        "myfilter": "4811",
        "name": "481185",
        "label": "SREENAGAR"
      },
      {
        "myfilter": "4827",
        "name": "482713",
        "label": "ARAIBARIA"
      },
      {
        "myfilter": "4827",
        "name": "482727",
        "label": "GOBINDAPUR"
      },
      {
        "myfilter": "4827",
        "name": "482740",
        "label": "JINARI"
      },
      {
        "myfilter": "4827",
        "name": "482754",
        "label": "PUMDI"
      },
      {
        "myfilter": "4827",
        "name": "482767",
        "label": "SAHEDAL"
      },
      {
        "myfilter": "4827",
        "name": "482781",
        "label": "SIDHLA"
      },
      {
        "myfilter": "4833",
        "name": "483317",
        "label": "BADLA"
      },
      {
        "myfilter": "4833",
        "name": "483325",
        "label": "BARIBARI"
      },
      {
        "myfilter": "4833",
        "name": "483326",
        "label": "CHAUGANGA"
      },
      {
        "myfilter": "4833",
        "name": "483343",
        "label": "DHANPUR"
      },
      {
        "myfilter": "4833",
        "name": "483347",
        "label": "ELONGJURI"
      },
      {
        "myfilter": "4833",
        "name": "483351",
        "label": "ITNA"
      },
      {
        "myfilter": "4833",
        "name": "483360",
        "label": "JOY SIDDHI"
      },
      {
        "myfilter": "4833",
        "name": "483386",
        "label": "MRIGA"
      },
      {
        "myfilter": "4833",
        "name": "483394",
        "label": "RAITUTI"
      },
      {
        "myfilter": "4842",
        "name": "484213",
        "label": "BARAGHARIA"
      },
      {
        "myfilter": "4842",
        "name": "484217",
        "label": "DEHUNDA"
      },
      {
        "myfilter": "4842",
        "name": "484234",
        "label": "GUJADIA"
      },
      {
        "myfilter": "4842",
        "name": "484225",
        "label": "GUNDHAR"
      },
      {
        "myfilter": "4842",
        "name": "484243",
        "label": "JAFARABAD"
      },
      {
        "myfilter": "4842",
        "name": "484251",
        "label": "JOYKA"
      },
      {
        "myfilter": "4842",
        "name": "484260",
        "label": "KADIR JANGAL"
      },
      {
        "myfilter": "4842",
        "name": "484271",
        "label": "KIRATAN"
      },
      {
        "myfilter": "4842",
        "name": "484277",
        "label": "NIAMATPUR"
      },
      {
        "myfilter": "4842",
        "name": "484286",
        "label": "NOABAD"
      },
      {
        "myfilter": "4842",
        "name": "484294",
        "label": "SUTAR PARA"
      },
      {
        "myfilter": "4845",
        "name": "484513",
        "label": "ACHMITA"
      },
      {
        "myfilter": "4845",
        "name": "484519",
        "label": "BANAGRAM"
      },
      {
        "myfilter": "4845",
        "name": "484528",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "4845",
        "name": "484538",
        "label": "JALALPUR"
      },
      {
        "myfilter": "4845",
        "name": "484547",
        "label": "KARGAON"
      },
      {
        "myfilter": "4845",
        "name": "484566",
        "label": "LOHAJURI"
      },
      {
        "myfilter": "4845",
        "name": "484576",
        "label": "MASUA"
      },
      {
        "myfilter": "4845",
        "name": "484585",
        "label": "MUMURDIA"
      },
      {
        "myfilter": "4845",
        "name": "484595",
        "label": "SHAHASRAM DHULDIA"
      },
      {
        "myfilter": "4849",
        "name": "484917",
        "label": "BAULAI"
      },
      {
        "myfilter": "4849",
        "name": "484916",
        "label": "BINNATI"
      },
      {
        "myfilter": "4849",
        "name": "484925",
        "label": "CHAUDDASATA"
      },
      {
        "myfilter": "4849",
        "name": "484934",
        "label": "DANA PATALI"
      },
      {
        "myfilter": "4849",
        "name": "484943",
        "label": "JASODAL"
      },
      {
        "myfilter": "4849",
        "name": "484951",
        "label": "KORSHA KARIAIL"
      },
      {
        "myfilter": "4849",
        "name": "484960",
        "label": "LATIBABAD"
      },
      {
        "myfilter": "4849",
        "name": "484969",
        "label": "MAHINANDA"
      },
      {
        "myfilter": "4849",
        "name": "484977",
        "label": "MAIJ KHAPAN"
      },
      {
        "myfilter": "4849",
        "name": "484986",
        "label": "MARIA"
      },
      {
        "myfilter": "4849",
        "name": "484994",
        "label": "RASHIDABAD"
      },
      {
        "myfilter": "4854",
        "name": "485411",
        "label": "CHHAYSUTI"
      },
      {
        "myfilter": "4854",
        "name": "485423",
        "label": "FARIDPUR"
      },
      {
        "myfilter": "4854",
        "name": "485435",
        "label": "GOBARIA ABDULLAHPUR"
      },
      {
        "myfilter": "4854",
        "name": "485459",
        "label": "OSMANPUR"
      },
      {
        "myfilter": "4854",
        "name": "485471",
        "label": "RAMDI"
      },
      {
        "myfilter": "4854",
        "name": "485483",
        "label": "SALUA"
      },
      {
        "myfilter": "4859",
        "name": "485911",
        "label": "BAIRATI"
      },
      {
        "myfilter": "4859",
        "name": "485913",
        "label": "DHAKI"
      },
      {
        "myfilter": "4859",
        "name": "485927",
        "label": "GHAGRA"
      },
      {
        "myfilter": "4859",
        "name": "485940",
        "label": "GOPEDIGHI"
      },
      {
        "myfilter": "4859",
        "name": "485967",
        "label": "KEORJORI"
      },
      {
        "myfilter": "4859",
        "name": "485954",
        "label": "KHATKHAL"
      },
      {
        "myfilter": "4859",
        "name": "485981",
        "label": "MITHAMAIN"
      },
      {
        "myfilter": "4876",
        "name": "487623",
        "label": "CHHATIR CHAR"
      },
      {
        "myfilter": "4876",
        "name": "487627",
        "label": "DAMPARA"
      },
      {
        "myfilter": "4876",
        "name": "487638",
        "label": "GURAI"
      },
      {
        "myfilter": "4876",
        "name": "487647",
        "label": "JARAITALA"
      },
      {
        "myfilter": "4876",
        "name": "487657",
        "label": "KARPASHA"
      },
      {
        "myfilter": "4876",
        "name": "487676",
        "label": "NIKLI"
      },
      {
        "myfilter": "4876",
        "name": "487685",
        "label": "SINGPUR"
      },
      {
        "myfilter": "4879",
        "name": "487915",
        "label": "BARUDIA"
      },
      {
        "myfilter": "4879",
        "name": "487919",
        "label": "CHANDI PASHA"
      },
      {
        "myfilter": "4879",
        "name": "487928",
        "label": "CHAR FARADI"
      },
      {
        "myfilter": "4879",
        "name": "487938",
        "label": "EGARASINDUR"
      },
      {
        "myfilter": "4879",
        "name": "487947",
        "label": "HOSENDI"
      },
      {
        "myfilter": "4879",
        "name": "487957",
        "label": "JANGALIA"
      },
      {
        "myfilter": "4879",
        "name": "487966",
        "label": "NARANDI"
      },
      {
        "myfilter": "4879",
        "name": "487985",
        "label": "PATUABHANGA"
      },
      {
        "myfilter": "4879",
        "name": "487995",
        "label": "SUKHIA"
      },
      {
        "myfilter": "4892",
        "name": "489213",
        "label": "DAMIHA"
      },
      {
        "myfilter": "4892",
        "name": "489227",
        "label": "DHALA"
      },
      {
        "myfilter": "4892",
        "name": "489240",
        "label": "DIGDAIR"
      },
      {
        "myfilter": "4892",
        "name": "489254",
        "label": "JAWAR"
      },
      {
        "myfilter": "4892",
        "name": "489267",
        "label": "RAUTI"
      },
      {
        "myfilter": "4892",
        "name": "489281",
        "label": "TALGANGA"
      },
      {
        "myfilter": "4892",
        "name": "489294",
        "label": "TARAIL SACHAIL"
      },
      {
        "myfilter": "5440",
        "name": "544011",
        "label": "ALINAGAR"
      },
      {
        "myfilter": "5440",
        "name": "544012",
        "label": "BALIGRAM"
      },
      {
        "myfilter": "5440",
        "name": "544018",
        "label": "BANSHGARI"
      },
      {
        "myfilter": "5440",
        "name": "544025",
        "label": "CHAR DAULAT KHAN"
      },
      {
        "myfilter": "5440",
        "name": "544031",
        "label": "DASAR"
      },
      {
        "myfilter": "5440",
        "name": "544037",
        "label": "ENAYETNAGAR"
      },
      {
        "myfilter": "5440",
        "name": "544044",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "5440",
        "name": "544056",
        "label": "KAYARIA"
      },
      {
        "myfilter": "5440",
        "name": "544063",
        "label": "KAZIBAKAI"
      },
      {
        "myfilter": "5440",
        "name": "544069",
        "label": "LAKSHMIPUR"
      },
      {
        "myfilter": "5440",
        "name": "544075",
        "label": "NABAGRAM"
      },
      {
        "myfilter": "5440",
        "name": "544082",
        "label": "RAMJANPUR"
      },
      {
        "myfilter": "5440",
        "name": "544088",
        "label": "SAHEBRAMPUR"
      },
      {
        "myfilter": "5440",
        "name": "544094",
        "label": "SHIKAR MANGAL"
      },
      {
        "myfilter": "5454",
        "name": "545410",
        "label": "BAHADURPUR"
      },
      {
        "myfilter": "5454",
        "name": "545411",
        "label": "CHILAR CHAR"
      },
      {
        "myfilter": "5454",
        "name": "545417",
        "label": "DHURAIL"
      },
      {
        "myfilter": "5454",
        "name": "545423",
        "label": "DUDKHALI"
      },
      {
        "myfilter": "5454",
        "name": "545429",
        "label": "GHATMAJHI"
      },
      {
        "myfilter": "5454",
        "name": "545435",
        "label": "JHAUDI"
      },
      {
        "myfilter": "5454",
        "name": "545441",
        "label": "KALIKAPUR"
      },
      {
        "myfilter": "5454",
        "name": "545447",
        "label": "KENDUA"
      },
      {
        "myfilter": "5454",
        "name": "545453",
        "label": "KHOAJPUR"
      },
      {
        "myfilter": "5454",
        "name": "545459",
        "label": "KUNIA"
      },
      {
        "myfilter": "5454",
        "name": "545471",
        "label": "MUSTAFAPUR"
      },
      {
        "myfilter": "5454",
        "name": "545477",
        "label": "PANCHKHOLA"
      },
      {
        "myfilter": "5454",
        "name": "545483",
        "label": "PEARPUR"
      },
      {
        "myfilter": "5454",
        "name": "545489",
        "label": "RASTI"
      },
      {
        "myfilter": "5454",
        "name": "545494",
        "label": "SIRKHARA"
      },
      {
        "myfilter": "5480",
        "name": "548013",
        "label": "AMGRAM"
      },
      {
        "myfilter": "5480",
        "name": "548019",
        "label": "BADAR PASHA"
      },
      {
        "myfilter": "5480",
        "name": "548028",
        "label": "BAJITPUR"
      },
      {
        "myfilter": "5480",
        "name": "548031",
        "label": "HARIDASDI MAHENDRADI"
      },
      {
        "myfilter": "5480",
        "name": "548038",
        "label": "HOSSAINPUR"
      },
      {
        "myfilter": "5480",
        "name": "548047",
        "label": "ISIBPUR"
      },
      {
        "myfilter": "5480",
        "name": "548057",
        "label": "KABIRAJPUR"
      },
      {
        "myfilter": "5480",
        "name": "548066",
        "label": "KADAMBARI"
      },
      {
        "myfilter": "5480",
        "name": "548076",
        "label": "KHALIA"
      },
      {
        "myfilter": "5480",
        "name": "548085",
        "label": "PAIK PARA"
      },
      {
        "myfilter": "5480",
        "name": "548095",
        "label": "RAJOIR"
      },
      {
        "myfilter": "5487",
        "name": "548715",
        "label": "BAHERATALA DAKSHIN"
      },
      {
        "myfilter": "5487",
        "name": "548718",
        "label": "BAHERATALA UTTAR"
      },
      {
        "myfilter": "5487",
        "name": "548711",
        "label": "BANDARKHOLA"
      },
      {
        "myfilter": "5487",
        "name": "548713",
        "label": "BANSHKANDI"
      },
      {
        "myfilter": "5487",
        "name": "548721",
        "label": "BHADRASAN"
      },
      {
        "myfilter": "5487",
        "name": "548726",
        "label": "BHANDARIKANDI"
      },
      {
        "myfilter": "5487",
        "name": "548731",
        "label": "CHAR JANAJAT"
      },
      {
        "myfilter": "5487",
        "name": "548736",
        "label": "DATTA PARA"
      },
      {
        "myfilter": "5487",
        "name": "548742",
        "label": "DITIYAKHANDA"
      },
      {
        "myfilter": "5487",
        "name": "548747",
        "label": "KADIRPUR"
      },
      {
        "myfilter": "5487",
        "name": "548752",
        "label": "KANTHALBARI"
      },
      {
        "myfilter": "5487",
        "name": "548758",
        "label": "KUTUBPUR"
      },
      {
        "myfilter": "5487",
        "name": "548763",
        "label": "MATBARER CHAR"
      },
      {
        "myfilter": "5487",
        "name": "548768",
        "label": "NILAKHI"
      },
      {
        "myfilter": "5487",
        "name": "548773",
        "label": "PANCH CHAR"
      },
      {
        "myfilter": "5487",
        "name": "548779",
        "label": "SANNYASIR CHAR"
      },
      {
        "myfilter": "5487",
        "name": "548784",
        "label": "SHIBCHAR"
      },
      {
        "myfilter": "5487",
        "name": "548789",
        "label": "SIRUAIL"
      },
      {
        "myfilter": "5487",
        "name": "548794",
        "label": "UMEDPUR"
      },
      {
        "myfilter": "5610",
        "name": "561017",
        "label": "BACHAMARA"
      },
      {
        "myfilter": "5610",
        "name": "561019",
        "label": "BAGHUTIA"
      },
      {
        "myfilter": "5610",
        "name": "561028",
        "label": "CHAK MIRPUR"
      },
      {
        "myfilter": "5610",
        "name": "561038",
        "label": "CHARKATARI"
      },
      {
        "myfilter": "5610",
        "name": "561057",
        "label": "DHAMSAR"
      },
      {
        "myfilter": "5610",
        "name": "561066",
        "label": "JIYANPUR"
      },
      {
        "myfilter": "5610",
        "name": "561076",
        "label": "KALIA"
      },
      {
        "myfilter": "5610",
        "name": "561085",
        "label": "KHALSI"
      },
      {
        "myfilter": "5622",
        "name": "562211",
        "label": "BALIAKHORA"
      },
      {
        "myfilter": "5622",
        "name": "562223",
        "label": "BANIAJURI"
      },
      {
        "myfilter": "5622",
        "name": "562235",
        "label": "BARATIA"
      },
      {
        "myfilter": "5622",
        "name": "562247",
        "label": "GHIOR"
      },
      {
        "myfilter": "5622",
        "name": "562259",
        "label": "NALI"
      },
      {
        "myfilter": "5622",
        "name": "562271",
        "label": "PAILA"
      },
      {
        "myfilter": "5622",
        "name": "562283",
        "label": "SINGJURI"
      },
      {
        "myfilter": "5628",
        "name": "562811",
        "label": "AZIMNAGAR"
      },
      {
        "myfilter": "5628",
        "name": "562821",
        "label": "BALARA"
      },
      {
        "myfilter": "5628",
        "name": "562814",
        "label": "BALLA"
      },
      {
        "myfilter": "5628",
        "name": "562829",
        "label": "BOYRA"
      },
      {
        "myfilter": "5628",
        "name": "562836",
        "label": "CHALA"
      },
      {
        "myfilter": "5628",
        "name": "562843",
        "label": "DHULSUNRA"
      },
      {
        "myfilter": "5628",
        "name": "562851",
        "label": "GALA"
      },
      {
        "myfilter": "5628",
        "name": "562858",
        "label": "GOPINATHPUR"
      },
      {
        "myfilter": "5628",
        "name": "562865",
        "label": "HARUKANDI"
      },
      {
        "myfilter": "5628",
        "name": "562873",
        "label": "KANCHANPUR"
      },
      {
        "myfilter": "5628",
        "name": "562880",
        "label": "LESRAGANJ"
      },
      {
        "myfilter": "5628",
        "name": "562887",
        "label": "RAMKRISHNAPUR"
      },
      {
        "myfilter": "5628",
        "name": "562894",
        "label": "SUTALARI"
      },
      {
        "myfilter": "5646",
        "name": "564613",
        "label": "ATIGRAM"
      },
      {
        "myfilter": "5646",
        "name": "564611",
        "label": "BETILA MITARA"
      },
      {
        "myfilter": "5646",
        "name": "564615",
        "label": "BHARARIA"
      },
      {
        "myfilter": "5646",
        "name": "564623",
        "label": "DIGHI"
      },
      {
        "myfilter": "5646",
        "name": "564631",
        "label": "GARPARA"
      },
      {
        "myfilter": "5646",
        "name": "564639",
        "label": "HATI PARA"
      },
      {
        "myfilter": "5646",
        "name": "564655",
        "label": "JAIGIR"
      },
      {
        "myfilter": "5646",
        "name": "564671",
        "label": "KRISHNAPUR"
      },
      {
        "myfilter": "5646",
        "name": "564687",
        "label": "NABAGRAM"
      },
      {
        "myfilter": "5646",
        "name": "564694",
        "label": "PUTAIL"
      },
      {
        "myfilter": "5670",
        "name": "567019",
        "label": "BALIATI"
      },
      {
        "myfilter": "5670",
        "name": "567028",
        "label": "BARAID"
      },
      {
        "myfilter": "5670",
        "name": "567038",
        "label": "DARAGRAM"
      },
      {
        "myfilter": "5670",
        "name": "567057",
        "label": "DHANKORA"
      },
      {
        "myfilter": "5670",
        "name": "567047",
        "label": "DIGHALIA"
      },
      {
        "myfilter": "5670",
        "name": "567066",
        "label": "FUKURHATI"
      },
      {
        "myfilter": "5670",
        "name": "567076",
        "label": "HARGAZ"
      },
      {
        "myfilter": "5670",
        "name": "567085",
        "label": "SATURIA"
      },
      {
        "myfilter": "5670",
        "name": "567095",
        "label": "TILLI"
      },
      {
        "myfilter": "5678",
        "name": "567811",
        "label": "ARUA"
      },
      {
        "myfilter": "5678",
        "name": "567823",
        "label": "MOHADEBPUR"
      },
      {
        "myfilter": "5678",
        "name": "567847",
        "label": "SHIBALAYA"
      },
      {
        "myfilter": "5678",
        "name": "567835",
        "label": "SHIMULIA"
      },
      {
        "myfilter": "5678",
        "name": "567859",
        "label": "TEOTA"
      },
      {
        "myfilter": "5678",
        "name": "567871",
        "label": "ULAIL"
      },
      {
        "myfilter": "5678",
        "name": "567883",
        "label": "UTHALI"
      },
      {
        "myfilter": "5682",
        "name": "568217",
        "label": "BALDHARA"
      },
      {
        "myfilter": "5682",
        "name": "568219",
        "label": "BOYRA"
      },
      {
        "myfilter": "5682",
        "name": "568225",
        "label": "CHANDHAR"
      },
      {
        "myfilter": "5682",
        "name": "568234",
        "label": "CHARIGRAM"
      },
      {
        "myfilter": "5682",
        "name": "568243",
        "label": "DHALLA"
      },
      {
        "myfilter": "5682",
        "name": "568260",
        "label": "JAMIRTA"
      },
      {
        "myfilter": "5682",
        "name": "568269",
        "label": "JAMSHA"
      },
      {
        "myfilter": "5682",
        "name": "568251",
        "label": "JOY MANTAP"
      },
      {
        "myfilter": "5682",
        "name": "568277",
        "label": "SAISTA"
      },
      {
        "myfilter": "5682",
        "name": "568286",
        "label": "SINGAIR"
      },
      {
        "myfilter": "5682",
        "name": "568294",
        "label": "TALIBPUR"
      },
      {
        "myfilter": "5924",
        "name": "592410",
        "label": "BALUAKANDI"
      },
      {
        "myfilter": "5924",
        "name": "592421",
        "label": "BAUSIA"
      },
      {
        "myfilter": "5924",
        "name": "592431",
        "label": "BHABER CHAR"
      },
      {
        "myfilter": "5924",
        "name": "592442",
        "label": "GAZARIA"
      },
      {
        "myfilter": "5924",
        "name": "592452",
        "label": "GUAGACHHIA"
      },
      {
        "myfilter": "5924",
        "name": "592463",
        "label": "HOSSAINDI"
      },
      {
        "myfilter": "5924",
        "name": "592473",
        "label": "IMAMPUR"
      },
      {
        "myfilter": "5924",
        "name": "592484",
        "label": "TENGER CHAR"
      },
      {
        "myfilter": "5944",
        "name": "594415",
        "label": "BAULTALI"
      },
      {
        "myfilter": "5944",
        "name": "594413",
        "label": "BEJGAON"
      },
      {
        "myfilter": "5944",
        "name": "594431",
        "label": "GAODIA"
      },
      {
        "myfilter": "5944",
        "name": "594439",
        "label": "HALDIA"
      },
      {
        "myfilter": "5944",
        "name": "594447",
        "label": "KALMA"
      },
      {
        "myfilter": "5944",
        "name": "594455",
        "label": "KANAKSAR"
      },
      {
        "myfilter": "5944",
        "name": "594463",
        "label": "KHIDIR PARA"
      },
      {
        "myfilter": "5944",
        "name": "594471",
        "label": "KUMARBHOG"
      },
      {
        "myfilter": "5944",
        "name": "594494",
        "label": "LOHAJANG TEOTIA"
      },
      {
        "myfilter": "5944",
        "name": "594487",
        "label": "MEDINI MANDAL"
      },
      {
        "myfilter": "5956",
        "name": "595620",
        "label": "ADHARA"
      },
      {
        "myfilter": "5956",
        "name": "595622",
        "label": "BAJRA JOGINI"
      },
      {
        "myfilter": "5956",
        "name": "595623",
        "label": "BANGLA BAZAR"
      },
      {
        "myfilter": "5956",
        "name": "595628",
        "label": "CHAR KEWAR"
      },
      {
        "myfilter": "5956",
        "name": "595647",
        "label": "MAHAKALI"
      },
      {
        "myfilter": "5956",
        "name": "595657",
        "label": "MOLLAHKANDI"
      },
      {
        "myfilter": "5956",
        "name": "595676",
        "label": "PANCHASAR"
      },
      {
        "myfilter": "5956",
        "name": "595685",
        "label": "RAMPAL"
      },
      {
        "myfilter": "5956",
        "name": "595638",
        "label": "SILAI"
      },
      {
        "myfilter": "5974",
        "name": "597411",
        "label": "BALUR CHAR"
      },
      {
        "myfilter": "5974",
        "name": "597413",
        "label": "BASAIL"
      },
      {
        "myfilter": "5974",
        "name": "597420",
        "label": "BAYARAGADI"
      },
      {
        "myfilter": "5974",
        "name": "597427",
        "label": "CHITRAKOT"
      },
      {
        "myfilter": "5974",
        "name": "597433",
        "label": "ICHHAPUR"
      },
      {
        "myfilter": "5974",
        "name": "597440",
        "label": "JAINSAR"
      },
      {
        "myfilter": "5974",
        "name": "597447",
        "label": "KAYAIN"
      },
      {
        "myfilter": "5974",
        "name": "597454",
        "label": "KOLA"
      },
      {
        "myfilter": "5974",
        "name": "597461",
        "label": "LATABDI"
      },
      {
        "myfilter": "5974",
        "name": "597467",
        "label": "MADHYAPARA"
      },
      {
        "myfilter": "5974",
        "name": "597474",
        "label": "MALKHANAGAR"
      },
      {
        "myfilter": "5974",
        "name": "597481",
        "label": "RAJANAGAR"
      },
      {
        "myfilter": "5974",
        "name": "597488",
        "label": "RASUNIA"
      },
      {
        "myfilter": "5974",
        "name": "597494",
        "label": "SEKHARNAGAR"
      },
      {
        "myfilter": "5984",
        "name": "598411",
        "label": "ATPARA"
      },
      {
        "myfilter": "5984",
        "name": "598413",
        "label": "BAGHRA"
      },
      {
        "myfilter": "5984",
        "name": "598420",
        "label": "BARAIKHALI"
      },
      {
        "myfilter": "5984",
        "name": "598427",
        "label": "BHAGYAKUL"
      },
      {
        "myfilter": "5984",
        "name": "598433",
        "label": "BIRTARA"
      },
      {
        "myfilter": "5984",
        "name": "598440",
        "label": "HASARA"
      },
      {
        "myfilter": "5984",
        "name": "598447",
        "label": "KOLA PARA"
      },
      {
        "myfilter": "5984",
        "name": "598454",
        "label": "KUKUTIA"
      },
      {
        "myfilter": "5984",
        "name": "598461",
        "label": "PATABHOG"
      },
      {
        "myfilter": "5984",
        "name": "598467",
        "label": "RARIKHAL"
      },
      {
        "myfilter": "5984",
        "name": "598481",
        "label": "SHOLAGHAR"
      },
      {
        "myfilter": "5984",
        "name": "598488",
        "label": "SHYAMSIDDHI"
      },
      {
        "myfilter": "5984",
        "name": "598474",
        "label": "SREENAGAR"
      },
      {
        "myfilter": "5984",
        "name": "598494",
        "label": "TANTAR"
      },
      {
        "myfilter": "5994",
        "name": "599411",
        "label": "ABDULLAHPUR"
      },
      {
        "myfilter": "5994",
        "name": "599415",
        "label": "ARIAL"
      },
      {
        "myfilter": "5994",
        "name": "599423",
        "label": "AUTSHAHI"
      },
      {
        "myfilter": "5994",
        "name": "599431",
        "label": "BETKA"
      },
      {
        "myfilter": "5994",
        "name": "599439",
        "label": "DHIPUR"
      },
      {
        "myfilter": "5994",
        "name": "599447",
        "label": "DIGHIR PARA"
      },
      {
        "myfilter": "5994",
        "name": "599455",
        "label": "HASAIL BANARI"
      },
      {
        "myfilter": "5994",
        "name": "599463",
        "label": "JASHALONG"
      },
      {
        "myfilter": "5994",
        "name": "599471",
        "label": "KAMARKHARA"
      },
      {
        "myfilter": "5994",
        "name": "599479",
        "label": "KATHADIA SHIMULIA"
      },
      {
        "myfilter": "5994",
        "name": "599487",
        "label": "PANCHGAON"
      },
      {
        "myfilter": "5994",
        "name": "599494",
        "label": "SONARANG TONGIBARI"
      },
      {
        "myfilter": "6113",
        "name": "611314",
        "label": "BHALUKA"
      },
      {
        "myfilter": "6113",
        "name": "611317",
        "label": "BHARADOBA"
      },
      {
        "myfilter": "6113",
        "name": "611325",
        "label": "BIRUNIA"
      },
      {
        "myfilter": "6113",
        "name": "611334",
        "label": "DAKATIA"
      },
      {
        "myfilter": "6113",
        "name": "611343",
        "label": "DHITPUR"
      },
      {
        "myfilter": "6113",
        "name": "611351",
        "label": "HABIRBARI"
      },
      {
        "myfilter": "6113",
        "name": "611360",
        "label": "KACHINA"
      },
      {
        "myfilter": "6113",
        "name": "611369",
        "label": "MALLIKBARI"
      },
      {
        "myfilter": "6113",
        "name": "611377",
        "label": "MEDUARY"
      },
      {
        "myfilter": "6113",
        "name": "611386",
        "label": "RAJAI"
      },
      {
        "myfilter": "6113",
        "name": "611394",
        "label": "UTHURA"
      },
      {
        "myfilter": "6116",
        "name": "611610",
        "label": "BAGHBER"
      },
      {
        "myfilter": "6116",
        "name": "611631",
        "label": "DAKSHIN MAIJ PARA"
      },
      {
        "myfilter": "6116",
        "name": "611636",
        "label": "DOBAURA"
      },
      {
        "myfilter": "6116",
        "name": "611642",
        "label": "GAMARITALA"
      },
      {
        "myfilter": "6116",
        "name": "611652",
        "label": "GHOSHGAON"
      },
      {
        "myfilter": "6116",
        "name": "611647",
        "label": "GUATALA"
      },
      {
        "myfilter": "6116",
        "name": "611673",
        "label": "PORA KANDULIA"
      },
      {
        "myfilter": "6120",
        "name": "612011",
        "label": "ACHIM PATULI"
      },
      {
        "myfilter": "6120",
        "name": "612017",
        "label": "BAKTA"
      },
      {
        "myfilter": "6120",
        "name": "612023",
        "label": "BALIAN"
      },
      {
        "myfilter": "6120",
        "name": "612029",
        "label": "BHABANIPUR"
      },
      {
        "myfilter": "6120",
        "name": "612035",
        "label": "DEOKHOLA"
      },
      {
        "myfilter": "6120",
        "name": "612041",
        "label": "ENAYETPUR"
      },
      {
        "myfilter": "6120",
        "name": "612047",
        "label": "FULBARIA"
      },
      {
        "myfilter": "6120",
        "name": "612053",
        "label": "KALADAHA"
      },
      {
        "myfilter": "6120",
        "name": "612059",
        "label": "KUSHMAIL"
      },
      {
        "myfilter": "6120",
        "name": "612077",
        "label": "NAOGAON"
      },
      {
        "myfilter": "6120",
        "name": "612083",
        "label": "PUTIJANA"
      },
      {
        "myfilter": "6120",
        "name": "612089",
        "label": "RADHAKANAI"
      },
      {
        "myfilter": "6120",
        "name": "612094",
        "label": "RANGAMATIA"
      },
      {
        "myfilter": "6122",
        "name": "612211",
        "label": "BARABARIA"
      },
      {
        "myfilter": "6122",
        "name": "612212",
        "label": "CHAR ALGI"
      },
      {
        "myfilter": "6122",
        "name": "612218",
        "label": "DATTER BAZAR"
      },
      {
        "myfilter": "6122",
        "name": "612225",
        "label": "GAFFARGAON"
      },
      {
        "myfilter": "6122",
        "name": "612231",
        "label": "JESSORA"
      },
      {
        "myfilter": "6122",
        "name": "612237",
        "label": "LANGAIR"
      },
      {
        "myfilter": "6122",
        "name": "612244",
        "label": "MASHAKHALI"
      },
      {
        "myfilter": "6122",
        "name": "612250",
        "label": "NIGAIR"
      },
      {
        "myfilter": "6122",
        "name": "612256",
        "label": "PAITHAL"
      },
      {
        "myfilter": "6122",
        "name": "612263",
        "label": "PANCHBHAG"
      },
      {
        "myfilter": "6122",
        "name": "612275",
        "label": "RAONA"
      },
      {
        "myfilter": "6122",
        "name": "612269",
        "label": "RASULPUR"
      },
      {
        "myfilter": "6122",
        "name": "612282",
        "label": "SALTIA"
      },
      {
        "myfilter": "6122",
        "name": "612288",
        "label": "TENGABA"
      },
      {
        "myfilter": "6122",
        "name": "612294",
        "label": "USTHI"
      },
      {
        "myfilter": "6123",
        "name": "612315",
        "label": "ACHINTAPUR"
      },
      {
        "myfilter": "6123",
        "name": "612318",
        "label": "BHANGNAMARI"
      },
      {
        "myfilter": "6123",
        "name": "612322",
        "label": "BOKAINAGAR"
      },
      {
        "myfilter": "6123",
        "name": "612327",
        "label": "DOWHAKHALA"
      },
      {
        "myfilter": "6123",
        "name": "612331",
        "label": "GAURIPUR"
      },
      {
        "myfilter": "6123",
        "name": "612349",
        "label": "MAILAKANDA"
      },
      {
        "myfilter": "6123",
        "name": "612358",
        "label": "MAOHA"
      },
      {
        "myfilter": "6123",
        "name": "612372",
        "label": "RAMGOPALPUR"
      },
      {
        "myfilter": "6123",
        "name": "612381",
        "label": "SAHANATI"
      },
      {
        "myfilter": "6123",
        "name": "612385",
        "label": "SIDHLA"
      },
      {
        "myfilter": "6124",
        "name": "612417",
        "label": "AMTAIL"
      },
      {
        "myfilter": "6124",
        "name": "612420",
        "label": "BHUBANKURA"
      },
      {
        "myfilter": "6124",
        "name": "612421",
        "label": "BILDORA"
      },
      {
        "myfilter": "6124",
        "name": "612433",
        "label": "DHARA"
      },
      {
        "myfilter": "6124",
        "name": "612440",
        "label": "DHURAIL"
      },
      {
        "myfilter": "6124",
        "name": "612447",
        "label": "GAZIR BHITA"
      },
      {
        "myfilter": "6124",
        "name": "612461",
        "label": "HALUAGHAT"
      },
      {
        "myfilter": "6124",
        "name": "612467",
        "label": "JUGLI"
      },
      {
        "myfilter": "6124",
        "name": "612474",
        "label": "KAICHAPUR"
      },
      {
        "myfilter": "6124",
        "name": "612481",
        "label": "NARAIL"
      },
      {
        "myfilter": "6124",
        "name": "612484",
        "label": "SAKUAI"
      },
      {
        "myfilter": "6124",
        "name": "612494",
        "label": "SWADESHI"
      },
      {
        "myfilter": "6131",
        "name": "613111",
        "label": "ATHARABARI"
      },
      {
        "myfilter": "6131",
        "name": "613113",
        "label": "BARAHIT"
      },
      {
        "myfilter": "6131",
        "name": "613140",
        "label": "ISHWARGANJ"
      },
      {
        "myfilter": "6131",
        "name": "613145",
        "label": "JATIA"
      },
      {
        "myfilter": "6131",
        "name": "613154",
        "label": "MAIJBAGH"
      },
      {
        "myfilter": "6131",
        "name": "613163",
        "label": "MOGTOLA"
      },
      {
        "myfilter": "6131",
        "name": "613167",
        "label": "RAJIBPUR"
      },
      {
        "myfilter": "6131",
        "name": "613176",
        "label": "SARISHA"
      },
      {
        "myfilter": "6131",
        "name": "613185",
        "label": "SOHAGI"
      },
      {
        "myfilter": "6131",
        "name": "613190",
        "label": "TARUNDIA"
      },
      {
        "myfilter": "6131",
        "name": "613194",
        "label": "UCHAKHILA"
      },
      {
        "myfilter": "6165",
        "name": "616516",
        "label": "BARAGRAM"
      },
      {
        "myfilter": "6165",
        "name": "616517",
        "label": "BASATI"
      },
      {
        "myfilter": "6165",
        "name": "616525",
        "label": "DAOGAON"
      },
      {
        "myfilter": "6165",
        "name": "616534",
        "label": "DULLA"
      },
      {
        "myfilter": "6165",
        "name": "616543",
        "label": "GHOGA"
      },
      {
        "myfilter": "6165",
        "name": "616551",
        "label": "KASHIMPUR"
      },
      {
        "myfilter": "6165",
        "name": "616560",
        "label": "KHERUAJANI"
      },
      {
        "myfilter": "6165",
        "name": "616569",
        "label": "KUMARGHATA"
      },
      {
        "myfilter": "6165",
        "name": "616577",
        "label": "MANKON UNION"
      },
      {
        "myfilter": "6165",
        "name": "616594",
        "label": "TARATI UNION"
      },
      {
        "myfilter": "6152",
        "name": "615223",
        "label": "AKUA"
      },
      {
        "myfilter": "6152",
        "name": "615225",
        "label": "ASHTADHAR"
      },
      {
        "myfilter": "6152",
        "name": "615227",
        "label": "BAIRA (KEWATKHALI) UNION"
      },
      {
        "myfilter": "6152",
        "name": "615229",
        "label": "BHABKHALI UNION"
      },
      {
        "myfilter": "6152",
        "name": "615231",
        "label": "BORAR CHAR UNION"
      },
      {
        "myfilter": "6152",
        "name": "615233",
        "label": "CHAR ISHWARDIA UNION"
      },
      {
        "myfilter": "6152",
        "name": "615240",
        "label": "CHAR NILAKSHMIA UNION"
      },
      {
        "myfilter": "6152",
        "name": "615247",
        "label": "DAPUNIA UNION"
      },
      {
        "myfilter": "6152",
        "name": "615254",
        "label": "GHAGRA UNION"
      },
      {
        "myfilter": "6152",
        "name": "615267",
        "label": "KHAGDAHAR UNION"
      },
      {
        "myfilter": "6152",
        "name": "615274",
        "label": "KUSHTIA UNION"
      },
      {
        "myfilter": "6152",
        "name": "615288",
        "label": "PARANGANJ UNION"
      },
      {
        "myfilter": "6152",
        "name": "615294",
        "label": "SIRTA UNION"
      },
      {
        "myfilter": "6172",
        "name": "617213",
        "label": "ACHARGAON"
      },
      {
        "myfilter": "6172",
        "name": "617215",
        "label": "BETAGAIR"
      },
      {
        "myfilter": "6172",
        "name": "617223",
        "label": "CHANDIPASHA"
      },
      {
        "myfilter": "6172",
        "name": "617231",
        "label": "GANGAIL"
      },
      {
        "myfilter": "6172",
        "name": "617239",
        "label": "JAHANGIRPUR"
      },
      {
        "myfilter": "6172",
        "name": "617247",
        "label": "KHARUA"
      },
      {
        "myfilter": "6172",
        "name": "617255",
        "label": "MOAZZEMPUR"
      },
      {
        "myfilter": "6172",
        "name": "617263",
        "label": "MUSULI"
      },
      {
        "myfilter": "6172",
        "name": "617271",
        "label": "NANDAIL"
      },
      {
        "myfilter": "6172",
        "name": "617279",
        "label": "RAJGATI"
      },
      {
        "myfilter": "6172",
        "name": "617287",
        "label": "SHERPUR"
      },
      {
        "myfilter": "6172",
        "name": "617294",
        "label": "SINGRAIL"
      },
      {
        "myfilter": "6181",
        "name": "618111",
        "label": "BALIA"
      },
      {
        "myfilter": "6181",
        "name": "618112",
        "label": "BALIKHAN"
      },
      {
        "myfilter": "6181",
        "name": "618113",
        "label": "BANIHALA"
      },
      {
        "myfilter": "6181",
        "name": "618127",
        "label": "BAOLA"
      },
      {
        "myfilter": "6181",
        "name": "618118",
        "label": "BHAITKANDI"
      },
      {
        "myfilter": "6181",
        "name": "618122",
        "label": "BISHKA"
      },
      {
        "myfilter": "6181",
        "name": "618131",
        "label": "DHAKUA"
      },
      {
        "myfilter": "6181",
        "name": "618136",
        "label": "GALAGAON"
      },
      {
        "myfilter": "6181",
        "name": "618140",
        "label": "KAKNI"
      },
      {
        "myfilter": "6181",
        "name": "618145",
        "label": "KAMARGAON"
      },
      {
        "myfilter": "6181",
        "name": "618149",
        "label": "KAMARIA"
      },
      {
        "myfilter": "6181",
        "name": "618154",
        "label": "PAYARI"
      },
      {
        "myfilter": "6181",
        "name": "618158",
        "label": "PHULPUR"
      },
      {
        "myfilter": "6181",
        "name": "618163",
        "label": "RAHIMGANJ"
      },
      {
        "myfilter": "6181",
        "name": "618167",
        "label": "RAMBHADRAPUR"
      },
      {
        "myfilter": "6181",
        "name": "618172",
        "label": "RAMPUR"
      },
      {
        "myfilter": "6181",
        "name": "618176",
        "label": "RUPASI"
      },
      {
        "myfilter": "6181",
        "name": "618181",
        "label": "SANDHARA"
      },
      {
        "myfilter": "6181",
        "name": "618190",
        "label": "SINGHESHWAR"
      },
      {
        "myfilter": "6181",
        "name": "618194",
        "label": "TARAKANDA"
      },
      {
        "myfilter": "6194",
        "name": "619413",
        "label": "AMIRABARI"
      },
      {
        "myfilter": "6194",
        "name": "619415",
        "label": "BAILAR"
      },
      {
        "myfilter": "6194",
        "name": "619419",
        "label": "BALI PARA"
      },
      {
        "myfilter": "6194",
        "name": "619428",
        "label": "DHANIKHOLA"
      },
      {
        "myfilter": "6194",
        "name": "619438",
        "label": "HARIRAMPUR"
      },
      {
        "myfilter": "6194",
        "name": "619447",
        "label": "KANIHARI"
      },
      {
        "myfilter": "6194",
        "name": "619457",
        "label": "KANTHAL"
      },
      {
        "myfilter": "6194",
        "name": "619461",
        "label": "MATHBARI"
      },
      {
        "myfilter": "6194",
        "name": "619463",
        "label": "MOKSHAPUR"
      },
      {
        "myfilter": "6194",
        "name": "619466",
        "label": "RAMPUR"
      },
      {
        "myfilter": "6194",
        "name": "619476",
        "label": "SAKHUA"
      },
      {
        "myfilter": "6194",
        "name": "619485",
        "label": "TRISHAL"
      },
      {
        "myfilter": "6702",
        "name": "670223",
        "label": "ARAIHAZAR"
      },
      {
        "myfilter": "6702",
        "name": "670226",
        "label": "BISHNANDI"
      },
      {
        "myfilter": "6702",
        "name": "670229",
        "label": "BRAHMANDI"
      },
      {
        "myfilter": "6702",
        "name": "670231",
        "label": "DUPTARA"
      },
      {
        "myfilter": "6702",
        "name": "670239",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "6702",
        "name": "670247",
        "label": "HAIZADI"
      },
      {
        "myfilter": "6702",
        "name": "670255",
        "label": "KALA PAHARIA"
      },
      {
        "myfilter": "6702",
        "name": "670263",
        "label": "KHAGAKANDA"
      },
      {
        "myfilter": "6702",
        "name": "670271",
        "label": "MAHMUDPUR"
      },
      {
        "myfilter": "6702",
        "name": "670279",
        "label": "SADASARDI"
      },
      {
        "myfilter": "6702",
        "name": "670287",
        "label": "SATGRAM"
      },
      {
        "myfilter": "6702",
        "name": "670294",
        "label": "UCHITPUR"
      },
      {
        "myfilter": "6706",
        "name": "670615",
        "label": "BANDAR"
      },
      {
        "myfilter": "6706",
        "name": "670631",
        "label": "DHAMGAR"
      },
      {
        "myfilter": "6706",
        "name": "670647",
        "label": "KALAGACHHIA UNION"
      },
      {
        "myfilter": "6706",
        "name": "670663",
        "label": "MADANPUR"
      },
      {
        "myfilter": "6706",
        "name": "670679",
        "label": "MUSAPUR"
      },
      {
        "myfilter": "6758",
        "name": "675820",
        "label": "ALIR TEK"
      },
      {
        "myfilter": "6758",
        "name": "675825",
        "label": "BAKTABALLI"
      },
      {
        "myfilter": "6758",
        "name": "675831",
        "label": "ENAYETNAGAR"
      },
      {
        "myfilter": "6758",
        "name": "675837",
        "label": "FATULLAH"
      },
      {
        "myfilter": "6758",
        "name": "675847",
        "label": "GOGNAGAR"
      },
      {
        "myfilter": "6758",
        "name": "675863",
        "label": "KASHIPUR"
      },
      {
        "myfilter": "6758",
        "name": "675879",
        "label": "KUTUBPUR"
      },
      {
        "myfilter": "6768",
        "name": "676822",
        "label": "BHOLABA"
      },
      {
        "myfilter": "6768",
        "name": "676825",
        "label": "BULTA"
      },
      {
        "myfilter": "6768",
        "name": "676831",
        "label": "DAUDPUR"
      },
      {
        "myfilter": "6768",
        "name": "676839",
        "label": "GOLAKANDAIL"
      },
      {
        "myfilter": "6768",
        "name": "676855",
        "label": "KAYET PARA"
      },
      {
        "myfilter": "6768",
        "name": "676863",
        "label": "MURA PARA"
      },
      {
        "myfilter": "6768",
        "name": "676879",
        "label": "RUPGANJ"
      },
      {
        "myfilter": "6704",
        "name": "670424",
        "label": "BAIDYER BAZAR"
      },
      {
        "myfilter": "6704",
        "name": "670427",
        "label": "BARADI"
      },
      {
        "myfilter": "6704",
        "name": "670434",
        "label": "JAMPUR"
      },
      {
        "myfilter": "6704",
        "name": "670443",
        "label": "KACHPUR"
      },
      {
        "myfilter": "6704",
        "name": "670451",
        "label": "MUGRA PARA"
      },
      {
        "myfilter": "6704",
        "name": "670460",
        "label": "NOAGAON"
      },
      {
        "myfilter": "6704",
        "name": "670469",
        "label": "PIRIJPUR"
      },
      {
        "myfilter": "6704",
        "name": "670477",
        "label": "SADIPUR"
      },
      {
        "myfilter": "6704",
        "name": "670494",
        "label": "SANMANDI"
      },
      {
        "myfilter": "6704",
        "name": "670486",
        "label": "SHAMBHUPURA"
      },
      {
        "myfilter": "6807",
        "name": "680711",
        "label": "AMLABA"
      },
      {
        "myfilter": "6807",
        "name": "680713",
        "label": "BAJNABA"
      },
      {
        "myfilter": "6807",
        "name": "680720",
        "label": "BELABO"
      },
      {
        "myfilter": "6807",
        "name": "680725",
        "label": "BINYABAID"
      },
      {
        "myfilter": "6807",
        "name": "680731",
        "label": "CHAR UJILABA"
      },
      {
        "myfilter": "6807",
        "name": "680759",
        "label": "NARAYANPUR"
      },
      {
        "myfilter": "6807",
        "name": "680771",
        "label": "PATULI"
      },
      {
        "myfilter": "6807",
        "name": "680783",
        "label": "SALLABAD"
      },
      {
        "myfilter": "6852",
        "name": "685221",
        "label": "BARA CHAPA"
      },
      {
        "myfilter": "6852",
        "name": "685227",
        "label": "CHALAK CHAR"
      },
      {
        "myfilter": "6852",
        "name": "685233",
        "label": "CHANDANBARI"
      },
      {
        "myfilter": "6852",
        "name": "685240",
        "label": "CHAR MANDALIA"
      },
      {
        "myfilter": "6852",
        "name": "685247",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "6852",
        "name": "685254",
        "label": "EKDUARIA"
      },
      {
        "myfilter": "6852",
        "name": "685261",
        "label": "GOTASHIA"
      },
      {
        "myfilter": "6852",
        "name": "685267",
        "label": "KANCHIKATA"
      },
      {
        "myfilter": "6852",
        "name": "685274",
        "label": "KHIDIRPUR"
      },
      {
        "myfilter": "6852",
        "name": "685277",
        "label": "KRISHNAPUR"
      },
      {
        "myfilter": "6852",
        "name": "685281",
        "label": "LEBUTALA"
      },
      {
        "myfilter": "6852",
        "name": "685294",
        "label": "SHUKUNDI"
      },
      {
        "myfilter": "6860",
        "name": "686020",
        "label": "ALOKBALI"
      },
      {
        "myfilter": "6860",
        "name": "686021",
        "label": "AMDIA"
      },
      {
        "myfilter": "6860",
        "name": "686023",
        "label": "CHAR DIGHALDI"
      },
      {
        "myfilter": "6860",
        "name": "686025",
        "label": "CHINISHPUR"
      },
      {
        "myfilter": "6860",
        "name": "686029",
        "label": "HAJIPUR"
      },
      {
        "myfilter": "6860",
        "name": "686047",
        "label": "KANTHALIA"
      },
      {
        "myfilter": "6860",
        "name": "686041",
        "label": "KARIMPUR"
      },
      {
        "myfilter": "6860",
        "name": "686059",
        "label": "MAHISHASURA"
      },
      {
        "myfilter": "6860",
        "name": "686065",
        "label": "MEHER PARA"
      },
      {
        "myfilter": "6860",
        "name": "686077",
        "label": "NAZARPUR"
      },
      {
        "myfilter": "6860",
        "name": "686053",
        "label": "NURALLA PUR U/C"
      },
      {
        "myfilter": "6860",
        "name": "686083",
        "label": "PAIKAR CHAR"
      },
      {
        "myfilter": "6860",
        "name": "686089",
        "label": "PANCHDONA"
      },
      {
        "myfilter": "6860",
        "name": "686095",
        "label": "SILMANDI"
      },
      {
        "myfilter": "6863",
        "name": "686315",
        "label": "CHAR SINDUR"
      },
      {
        "myfilter": "6863",
        "name": "686331",
        "label": "DANGA"
      },
      {
        "myfilter": "6863",
        "name": "686347",
        "label": "GAZARIA"
      },
      {
        "myfilter": "6863",
        "name": "686379",
        "label": "JINARDI"
      },
      {
        "myfilter": "6864",
        "name": "686412",
        "label": "ADIABAD"
      },
      {
        "myfilter": "6864",
        "name": "686414",
        "label": "ALIPURA"
      },
      {
        "myfilter": "6864",
        "name": "686410",
        "label": "AMIRGANJ"
      },
      {
        "myfilter": "6864",
        "name": "686416",
        "label": "BANSHGARI"
      },
      {
        "myfilter": "6864",
        "name": "686423",
        "label": "CHANDERKANDI"
      },
      {
        "myfilter": "6864",
        "name": "686427",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "6864",
        "name": "686430",
        "label": "CHAR ARALIA"
      },
      {
        "myfilter": "6864",
        "name": "686433",
        "label": "CHAR MADHUA"
      },
      {
        "myfilter": "6864",
        "name": "686437",
        "label": "CHAR SUBUDDI"
      },
      {
        "myfilter": "6864",
        "name": "686440",
        "label": "DAUKAR CHAR"
      },
      {
        "myfilter": "6864",
        "name": "686444",
        "label": "HAIRMARA"
      },
      {
        "myfilter": "6864",
        "name": "686447",
        "label": "MAHESHPUR"
      },
      {
        "myfilter": "6864",
        "name": "686450",
        "label": "MARJAL"
      },
      {
        "myfilter": "6864",
        "name": "686454",
        "label": "MIRZANAGAR"
      },
      {
        "myfilter": "6864",
        "name": "686457",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "6864",
        "name": "686461",
        "label": "MIRZAR CHAR"
      },
      {
        "myfilter": "6864",
        "name": "686464",
        "label": "MUSAPUR"
      },
      {
        "myfilter": "6864",
        "name": "686471",
        "label": "NILAKHYA"
      },
      {
        "myfilter": "6864",
        "name": "686474",
        "label": "PALASHTALI"
      },
      {
        "myfilter": "6864",
        "name": "686478",
        "label": "PARATALI"
      },
      {
        "myfilter": "6864",
        "name": "686481",
        "label": "RADHANAGAR"
      },
      {
        "myfilter": "6864",
        "name": "686484",
        "label": "ROYPURA"
      },
      {
        "myfilter": "6864",
        "name": "686491",
        "label": "SREENAGAR"
      },
      {
        "myfilter": "6864",
        "name": "686494",
        "label": "UTTAR BAKHARNAGAR"
      },
      {
        "myfilter": "6876",
        "name": "687610",
        "label": "AYUBPUR"
      },
      {
        "myfilter": "6876",
        "name": "687621",
        "label": "BAGHABA"
      },
      {
        "myfilter": "6876",
        "name": "687631",
        "label": "CHAK RADHA"
      },
      {
        "myfilter": "6876",
        "name": "687642",
        "label": "DULALPUR"
      },
      {
        "myfilter": "6876",
        "name": "687652",
        "label": "JOSAR"
      },
      {
        "myfilter": "6876",
        "name": "687663",
        "label": "JOYNAGAR"
      },
      {
        "myfilter": "6876",
        "name": "687673",
        "label": "MASIMPUR"
      },
      {
        "myfilter": "6876",
        "name": "687684",
        "label": "PUTIA"
      },
      {
        "myfilter": "6876",
        "name": "687694",
        "label": "SADHAR CHAR"
      },
      {
        "myfilter": "7204",
        "name": "720411",
        "label": "BANIAJAN"
      },
      {
        "myfilter": "7204",
        "name": "720423",
        "label": "DUAZ"
      },
      {
        "myfilter": "7204",
        "name": "720435",
        "label": "LONESHWAR"
      },
      {
        "myfilter": "7204",
        "name": "720447",
        "label": "SARMAISA"
      },
      {
        "myfilter": "7204",
        "name": "720471",
        "label": "SONAI"
      },
      {
        "myfilter": "7204",
        "name": "720459",
        "label": "SUKHARI"
      },
      {
        "myfilter": "7204",
        "name": "720483",
        "label": "TELIGATI"
      },
      {
        "myfilter": "7209",
        "name": "720911",
        "label": "ASMA"
      },
      {
        "myfilter": "7209",
        "name": "720923",
        "label": "BARHATTA"
      },
      {
        "myfilter": "7209",
        "name": "720935",
        "label": "BAUSHI"
      },
      {
        "myfilter": "7209",
        "name": "720947",
        "label": "CHHIRAM"
      },
      {
        "myfilter": "7209",
        "name": "720959",
        "label": "ROYPUR"
      },
      {
        "myfilter": "7209",
        "name": "720971",
        "label": "SAHATA"
      },
      {
        "myfilter": "7209",
        "name": "720983",
        "label": "SINGDHA"
      },
      {
        "myfilter": "7218",
        "name": "721812",
        "label": "BAKALJORA"
      },
      {
        "myfilter": "7218",
        "name": "721817",
        "label": "BIRISIRI"
      },
      {
        "myfilter": "7218",
        "name": "721825",
        "label": "CHANDIGARH"
      },
      {
        "myfilter": "7218",
        "name": "721851",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "7218",
        "name": "721869",
        "label": "GAOKANDIA"
      },
      {
        "myfilter": "7218",
        "name": "721877",
        "label": "KAKAIRGARA"
      },
      {
        "myfilter": "7218",
        "name": "721886",
        "label": "KULLAGORA"
      },
      {
        "myfilter": "7240",
        "name": "724011",
        "label": "BARA KHARPAN"
      },
      {
        "myfilter": "7240",
        "name": "724023",
        "label": "KAILATI"
      },
      {
        "myfilter": "7240",
        "name": "724035",
        "label": "KALMAKANDA"
      },
      {
        "myfilter": "7240",
        "name": "724047",
        "label": "KHARNAI"
      },
      {
        "myfilter": "7240",
        "name": "724059",
        "label": "LENGURA"
      },
      {
        "myfilter": "7240",
        "name": "724071",
        "label": "NAZIRPUR"
      },
      {
        "myfilter": "7240",
        "name": "724083",
        "label": "POGLA"
      },
      {
        "myfilter": "7240",
        "name": "724095",
        "label": "RANGCHHATI"
      },
      {
        "myfilter": "7247",
        "name": "724711",
        "label": "ASUJIA"
      },
      {
        "myfilter": "7247",
        "name": "724713",
        "label": "BALAISHIMUL"
      },
      {
        "myfilter": "7247",
        "name": "724720",
        "label": "CHIRANG"
      },
      {
        "myfilter": "7247",
        "name": "724727",
        "label": "DALPA"
      },
      {
        "myfilter": "7247",
        "name": "724740",
        "label": "GANDA"
      },
      {
        "myfilter": "7247",
        "name": "724733",
        "label": "GARADOBA"
      },
      {
        "myfilter": "7247",
        "name": "724747",
        "label": "KANDIURA"
      },
      {
        "myfilter": "7247",
        "name": "724761",
        "label": "MASHKA"
      },
      {
        "myfilter": "7247",
        "name": "724767",
        "label": "MUZAFFARPUR"
      },
      {
        "myfilter": "7247",
        "name": "724774",
        "label": "NOAPARA"
      },
      {
        "myfilter": "7247",
        "name": "724781",
        "label": "PAIKURA"
      },
      {
        "myfilter": "7247",
        "name": "724788",
        "label": "ROAILBARI"
      },
      {
        "myfilter": "7247",
        "name": "724794",
        "label": "SANDIKONA"
      },
      {
        "myfilter": "7238",
        "name": "723813",
        "label": "CHAKUA"
      },
      {
        "myfilter": "7238",
        "name": "723827",
        "label": "GAZIPUR"
      },
      {
        "myfilter": "7238",
        "name": "723840",
        "label": "KHALIAJURI"
      },
      {
        "myfilter": "7238",
        "name": "723854",
        "label": "KRISHNAPUR"
      },
      {
        "myfilter": "7238",
        "name": "723867",
        "label": "MENDIPUR"
      },
      {
        "myfilter": "7238",
        "name": "723881",
        "label": "NAGAR"
      },
      {
        "myfilter": "7256",
        "name": "725631",
        "label": "CHANDGAON"
      },
      {
        "myfilter": "7256",
        "name": "725610",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "7256",
        "name": "725621",
        "label": "GOBINDASREE"
      },
      {
        "myfilter": "7256",
        "name": "725642",
        "label": "KAITAIL"
      },
      {
        "myfilter": "7256",
        "name": "725652",
        "label": "MADAN"
      },
      {
        "myfilter": "7256",
        "name": "725663",
        "label": "MAGHAN"
      },
      {
        "myfilter": "7256",
        "name": "725673",
        "label": "NAYEKPUR"
      },
      {
        "myfilter": "7256",
        "name": "725684",
        "label": "TIASREE"
      },
      {
        "myfilter": "7263",
        "name": "726321",
        "label": "BARATALI BANIHARI"
      },
      {
        "myfilter": "7263",
        "name": "726310",
        "label": "BARKASHIA BIRAMP"
      },
      {
        "myfilter": "7263",
        "name": "726331",
        "label": "GAGLAJUR"
      },
      {
        "myfilter": "7263",
        "name": "726342",
        "label": "MAGHAN SIADHAR"
      },
      {
        "myfilter": "7263",
        "name": "726363",
        "label": "SAMAJ SAHILDEO"
      },
      {
        "myfilter": "7263",
        "name": "726373",
        "label": "SUAIR"
      },
      {
        "myfilter": "7263",
        "name": "726384",
        "label": "TENTULIA"
      },
      {
        "myfilter": "7274",
        "name": "727413",
        "label": "AMTALA"
      },
      {
        "myfilter": "7274",
        "name": "727415",
        "label": "CHALLISHA"
      },
      {
        "myfilter": "7274",
        "name": "727423",
        "label": "DAKSHIN BISHIURA"
      },
      {
        "myfilter": "7274",
        "name": "727431",
        "label": "KAILATI"
      },
      {
        "myfilter": "7274",
        "name": "727439",
        "label": "KALIARA GABRAGAT"
      },
      {
        "myfilter": "7274",
        "name": "727447",
        "label": "LAKSHMIGANJ"
      },
      {
        "myfilter": "7274",
        "name": "727454",
        "label": "MADANPUR"
      },
      {
        "myfilter": "7274",
        "name": "727463",
        "label": "MAUGATI"
      },
      {
        "myfilter": "7274",
        "name": "727455",
        "label": "MEDNI"
      },
      {
        "myfilter": "7274",
        "name": "727479",
        "label": "RAUHA"
      },
      {
        "myfilter": "7274",
        "name": "727487",
        "label": "SINGHAR BANGLA"
      },
      {
        "myfilter": "7274",
        "name": "727494",
        "label": "THAKURAKONA"
      },
      {
        "myfilter": "7283",
        "name": "728313",
        "label": "AGIA"
      },
      {
        "myfilter": "7283",
        "name": "728315",
        "label": "BAIRATI"
      },
      {
        "myfilter": "7283",
        "name": "728323",
        "label": "BISHKAKUNI"
      },
      {
        "myfilter": "7283",
        "name": "728331",
        "label": "DHALA MULGAON"
      },
      {
        "myfilter": "7283",
        "name": "728339",
        "label": "GHAGRA"
      },
      {
        "myfilter": "7283",
        "name": "728355",
        "label": "GOHALAKANDA"
      },
      {
        "myfilter": "7283",
        "name": "728363",
        "label": "HOGLA"
      },
      {
        "myfilter": "7283",
        "name": "728371",
        "label": "JARIA"
      },
      {
        "myfilter": "7283",
        "name": "728379",
        "label": "KHALISHAUR"
      },
      {
        "myfilter": "7283",
        "name": "728387",
        "label": "NARANDIA"
      },
      {
        "myfilter": "7283",
        "name": "728394",
        "label": "PURBADHALA"
      },
      {
        "myfilter": "8207",
        "name": "820717",
        "label": "BAHARPUR"
      },
      {
        "myfilter": "8207",
        "name": "820719",
        "label": "BALIAKANDI"
      },
      {
        "myfilter": "8207",
        "name": "820747",
        "label": "ISLAMPUR"
      },
      {
        "myfilter": "8207",
        "name": "820757",
        "label": "JAMALPUR"
      },
      {
        "myfilter": "8207",
        "name": "820766",
        "label": "JANGAL"
      },
      {
        "myfilter": "8207",
        "name": "820785",
        "label": "NARUA"
      },
      {
        "myfilter": "8207",
        "name": "820795",
        "label": "NAWABPUR"
      },
      {
        "myfilter": "8229",
        "name": "822919",
        "label": "CHHOTA BHAKLA"
      },
      {
        "myfilter": "8229",
        "name": "822938",
        "label": "DAULATDIA"
      },
      {
        "myfilter": "8229",
        "name": "822957",
        "label": "DEBAGRAM"
      },
      {
        "myfilter": "8229",
        "name": "822976",
        "label": "UJAN CHAR"
      },
      {
        "myfilter": "8247",
        "name": "824718",
        "label": "BOALIA"
      },
      {
        "myfilter": "8247",
        "name": "824730",
        "label": "KALIKAPUR"
      },
      {
        "myfilter": "8247",
        "name": "824760",
        "label": "MADAPUR"
      },
      {
        "myfilter": "8247",
        "name": "824755",
        "label": "MAJHBARI"
      },
      {
        "myfilter": "8247",
        "name": "824770",
        "label": "MRIGI"
      },
      {
        "myfilter": "8247",
        "name": "824785",
        "label": "RATANDIA"
      },
      {
        "myfilter": "8247",
        "name": "824795",
        "label": "SAORAIL"
      },
      {
        "myfilter": "8273",
        "name": "827375",
        "label": "BABUPARA"
      },
      {
        "myfilter": "8273",
        "name": "827316",
        "label": "BAHADURPUR"
      },
      {
        "myfilter": "8273",
        "name": "827320",
        "label": "HABASPUR"
      },
      {
        "myfilter": "8273",
        "name": "827325",
        "label": "JASHAI"
      },
      {
        "myfilter": "8273",
        "name": "827335",
        "label": "KALIMAHAR"
      },
      {
        "myfilter": "8273",
        "name": "827340",
        "label": "KASBA MAJHAIL"
      },
      {
        "myfilter": "8273",
        "name": "827350",
        "label": "MACHH PARA"
      },
      {
        "myfilter": "8273",
        "name": "827365",
        "label": "MAURAT"
      },
      {
        "myfilter": "8273",
        "name": "827380",
        "label": "PATTA"
      },
      {
        "myfilter": "8273",
        "name": "827390",
        "label": "SARISHA"
      },
      {
        "myfilter": "8276",
        "name": "827612",
        "label": "ALIPUR"
      },
      {
        "myfilter": "8276",
        "name": "827614",
        "label": "BANIBAHA"
      },
      {
        "myfilter": "8276",
        "name": "827621",
        "label": "BARAT"
      },
      {
        "myfilter": "8276",
        "name": "827629",
        "label": "BASANTAPUR"
      },
      {
        "myfilter": "8276",
        "name": "827632",
        "label": "CHANDANI"
      },
      {
        "myfilter": "8276",
        "name": "827636",
        "label": "DADSHI"
      },
      {
        "myfilter": "8276",
        "name": "827645",
        "label": "KHANGANJ"
      },
      {
        "myfilter": "8276",
        "name": "827643",
        "label": "KHANKHANAPUR"
      },
      {
        "myfilter": "8276",
        "name": "827651",
        "label": "MIZANPUR"
      },
      {
        "myfilter": "8276",
        "name": "827658",
        "label": "MULGHAR"
      },
      {
        "myfilter": "8276",
        "name": "827665",
        "label": "PANCHURIA"
      },
      {
        "myfilter": "8276",
        "name": "827680",
        "label": "RAMKANTAPUR"
      },
      {
        "myfilter": "8276",
        "name": "827687",
        "label": "SHAHID WAHABPUR"
      },
      {
        "myfilter": "8276",
        "name": "827694",
        "label": "SULTANPUR"
      },
      {
        "myfilter": "8614",
        "name": "861412",
        "label": "ARSHI NAGAR"
      },
      {
        "myfilter": "8614",
        "name": "861415",
        "label": "CHAR BHAGA"
      },
      {
        "myfilter": "8614",
        "name": "861428",
        "label": "CHAR CENSUS"
      },
      {
        "myfilter": "8614",
        "name": "861417",
        "label": "CHAR KUMARIA"
      },
      {
        "myfilter": "8614",
        "name": "861425",
        "label": "CHHAYGAON"
      },
      {
        "myfilter": "8614",
        "name": "861432",
        "label": "DHAKHIN TARABUNIA"
      },
      {
        "myfilter": "8614",
        "name": "861443",
        "label": "DIGAR MAHISHKHALI"
      },
      {
        "myfilter": "8614",
        "name": "861451",
        "label": "KACHIKATA"
      },
      {
        "myfilter": "8614",
        "name": "861460",
        "label": "MAHISAR"
      },
      {
        "myfilter": "8614",
        "name": "861469",
        "label": "NARAYANPUR"
      },
      {
        "myfilter": "8614",
        "name": "861477",
        "label": "RAMBHADRAPUR"
      },
      {
        "myfilter": "8614",
        "name": "861486",
        "label": "SAKHIPUR"
      },
      {
        "myfilter": "8614",
        "name": "861494",
        "label": "TARABUNIA"
      },
      {
        "myfilter": "8625",
        "name": "862523",
        "label": "DARUL AMAN"
      },
      {
        "myfilter": "8625",
        "name": "862535",
        "label": "DHANKATI"
      },
      {
        "myfilter": "8625",
        "name": "862540",
        "label": "ISLAM PUR"
      },
      {
        "myfilter": "8625",
        "name": "862547",
        "label": "KANESHWAR"
      },
      {
        "myfilter": "8625",
        "name": "862559",
        "label": "PURBA DAMUDYA"
      },
      {
        "myfilter": "8625",
        "name": "862571",
        "label": "SIDULKURA"
      },
      {
        "myfilter": "8625",
        "name": "862583",
        "label": "SIDYA"
      },
      {
        "myfilter": "8636",
        "name": "863611",
        "label": "ALADLPUR CHAR"
      },
      {
        "myfilter": "8636",
        "name": "863623",
        "label": "GOSAIRHAT"
      },
      {
        "myfilter": "8636",
        "name": "863635",
        "label": "IDILPUR"
      },
      {
        "myfilter": "8636",
        "name": "863647",
        "label": "KODALPUR"
      },
      {
        "myfilter": "8636",
        "name": "863651",
        "label": "KUCHAIPATTI"
      },
      {
        "myfilter": "8636",
        "name": "863659",
        "label": "NAGER PARA"
      },
      {
        "myfilter": "8636",
        "name": "863671",
        "label": "NALMURI"
      },
      {
        "myfilter": "8636",
        "name": "863683",
        "label": "SAMANTASAR"
      },
      {
        "myfilter": "8665",
        "name": "866511",
        "label": "BHOJESHWAR"
      },
      {
        "myfilter": "8665",
        "name": "866512",
        "label": "BHUMKHARA"
      },
      {
        "myfilter": "8665",
        "name": "866518",
        "label": "BIJHARI"
      },
      {
        "myfilter": "8665",
        "name": "866525",
        "label": "CHAMTA"
      },
      {
        "myfilter": "8665",
        "name": "866531",
        "label": "CHAR ATRA"
      },
      {
        "myfilter": "8665",
        "name": "866537",
        "label": "DINGA MANIK"
      },
      {
        "myfilter": "8665",
        "name": "866544",
        "label": "FATEH JANGAPUR"
      },
      {
        "myfilter": "8665",
        "name": "866550",
        "label": "GHARISAR"
      },
      {
        "myfilter": "8665",
        "name": "866556",
        "label": "JAPSA"
      },
      {
        "myfilter": "8665",
        "name": "866563",
        "label": "KEDARPUR"
      },
      {
        "myfilter": "8665",
        "name": "866569",
        "label": "MUKTARER CHAR"
      },
      {
        "myfilter": "8665",
        "name": "866582",
        "label": "NASASAN"
      },
      {
        "myfilter": "8665",
        "name": "866588",
        "label": "NOAPARA"
      },
      {
        "myfilter": "8665",
        "name": "866594",
        "label": "RAJNAGAR"
      },
      {
        "myfilter": "8669",
        "name": "866917",
        "label": "ANGARIA"
      },
      {
        "myfilter": "8669",
        "name": "866919",
        "label": "BINODPUR"
      },
      {
        "myfilter": "8669",
        "name": "866928",
        "label": "CHANDRAPUR"
      },
      {
        "myfilter": "8669",
        "name": "866938",
        "label": "CHIKANDI"
      },
      {
        "myfilter": "8669",
        "name": "866947",
        "label": "CHITALIA"
      },
      {
        "myfilter": "8669",
        "name": "866957",
        "label": "DOMSAR"
      },
      {
        "myfilter": "8669",
        "name": "866962",
        "label": "MOHAMMADPUR"
      },
      {
        "myfilter": "8669",
        "name": "866966",
        "label": "PALONG"
      },
      {
        "myfilter": "8669",
        "name": "866976",
        "label": "RUDRAKAR"
      },
      {
        "myfilter": "8669",
        "name": "866985",
        "label": "SHAUL PARA"
      },
      {
        "myfilter": "8669",
        "name": "866995",
        "label": "TULASAR"
      },
      {
        "myfilter": "8694",
        "name": "869412",
        "label": "BARA GOPALPUR"
      },
      {
        "myfilter": "8694",
        "name": "869421",
        "label": "BARA KRISHNAGAR"
      },
      {
        "myfilter": "8694",
        "name": "869414",
        "label": "BARAKANDI"
      },
      {
        "myfilter": "8694",
        "name": "869429",
        "label": "BILASPUR"
      },
      {
        "myfilter": "8694",
        "name": "869443",
        "label": "JOYNAGAR"
      },
      {
        "myfilter": "8694",
        "name": "869451",
        "label": "KUNDER CHAR"
      },
      {
        "myfilter": "8694",
        "name": "869458",
        "label": "MULNA"
      },
      {
        "myfilter": "8694",
        "name": "869465",
        "label": "NAODOBA"
      },
      {
        "myfilter": "8694",
        "name": "869473",
        "label": "PALER CHAR"
      },
      {
        "myfilter": "8694",
        "name": "869480",
        "label": "PURBA NAODOBA"
      },
      {
        "myfilter": "8694",
        "name": "869487",
        "label": "SENER CHAR"
      },
      {
        "myfilter": "8694",
        "name": "869494",
        "label": "ZANJIRA"
      },
      {
        "myfilter": "8937",
        "name": "893712",
        "label": "DHANSHAIL"
      },
      {
        "myfilter": "8937",
        "name": "893715",
        "label": "GAURIPUR"
      },
      {
        "myfilter": "8937",
        "name": "893717",
        "label": "HATIBANDHA MALIJHIKANDA"
      },
      {
        "myfilter": "8937",
        "name": "893725",
        "label": "JHENAIGATI"
      },
      {
        "myfilter": "8937",
        "name": "893743",
        "label": "KANGSHA"
      },
      {
        "myfilter": "8937",
        "name": "893750",
        "label": "MALIJHIKANDA"
      },
      {
        "myfilter": "8937",
        "name": "893760",
        "label": "NALKURA"
      },
      {
        "myfilter": "8967",
        "name": "896717",
        "label": "BANESHWARDI"
      },
      {
        "myfilter": "8967",
        "name": "896719",
        "label": "CHANDRAKONA"
      },
      {
        "myfilter": "8967",
        "name": "896728",
        "label": "CHAR ASHTADHAR"
      },
      {
        "myfilter": "8967",
        "name": "896738",
        "label": "GANAPADDI"
      },
      {
        "myfilter": "8967",
        "name": "896747",
        "label": "GOURDWAR"
      },
      {
        "myfilter": "8967",
        "name": "896757",
        "label": "NAKLA"
      },
      {
        "myfilter": "8967",
        "name": "896766",
        "label": "PATHAKATA"
      },
      {
        "myfilter": "8967",
        "name": "896776",
        "label": "TALKI"
      },
      {
        "myfilter": "8967",
        "name": "896785",
        "label": "URPHA"
      },
      {
        "myfilter": "8970",
        "name": "897030",
        "label": "BAGHBER"
      },
      {
        "myfilter": "8970",
        "name": "897034",
        "label": "JOGANIA"
      },
      {
        "myfilter": "8970",
        "name": "897038",
        "label": "KAKARKANDI"
      },
      {
        "myfilter": "8970",
        "name": "897041",
        "label": "KALASPUR"
      },
      {
        "myfilter": "8970",
        "name": "897072",
        "label": "MARICHPURA"
      },
      {
        "myfilter": "8970",
        "name": "897051",
        "label": "NALITABARI"
      },
      {
        "myfilter": "8970",
        "name": "897055",
        "label": "NAYABIL"
      },
      {
        "myfilter": "8970",
        "name": "897069",
        "label": "NUNNI"
      },
      {
        "myfilter": "8970",
        "name": "897075",
        "label": "PORAGAON"
      },
      {
        "myfilter": "8970",
        "name": "897077",
        "label": "RAJNAGAR"
      },
      {
        "myfilter": "8970",
        "name": "897086",
        "label": "RAMCHANDRAKURA MANDALIA"
      },
      {
        "myfilter": "8970",
        "name": "897094",
        "label": "RUPNARAYANKURA"
      },
      {
        "myfilter": "8988",
        "name": "898811",
        "label": "BAJITKHILA"
      },
      {
        "myfilter": "8988",
        "name": "898813",
        "label": "BALAIR CHAR"
      },
      {
        "myfilter": "8988",
        "name": "898815",
        "label": "BETMARI GHUGHURAKANDI"
      },
      {
        "myfilter": "8988",
        "name": "898820",
        "label": "BHATSALA"
      },
      {
        "myfilter": "8988",
        "name": "898827",
        "label": "CHAR MUCHARIA"
      },
      {
        "myfilter": "8988",
        "name": "898833",
        "label": "CHAR PAKSHIMARI"
      },
      {
        "myfilter": "8988",
        "name": "898840",
        "label": "CHAR SHERPUR"
      },
      {
        "myfilter": "8988",
        "name": "898847",
        "label": "DHALA"
      },
      {
        "myfilter": "8988",
        "name": "898854",
        "label": "GHAZIR KHAMAR"
      },
      {
        "myfilter": "8988",
        "name": "898861",
        "label": "KAMARER CHAR"
      },
      {
        "myfilter": "8988",
        "name": "898867",
        "label": "KAMARIA"
      },
      {
        "myfilter": "8988",
        "name": "898874",
        "label": "LAKSHMANPUR"
      },
      {
        "myfilter": "8988",
        "name": "898881",
        "label": "PAKURIA"
      },
      {
        "myfilter": "8988",
        "name": "898888",
        "label": "RAUHA"
      },
      {
        "myfilter": "8990",
        "name": "899015",
        "label": "BHELUA"
      },
      {
        "myfilter": "8990",
        "name": "899031",
        "label": "GARJARIPA"
      },
      {
        "myfilter": "8990",
        "name": "899039",
        "label": "GOSAIPUR"
      },
      {
        "myfilter": "8990",
        "name": "899047",
        "label": "KAKILAKURA"
      },
      {
        "myfilter": "8990",
        "name": "899055",
        "label": "KHARIA KAZIR CHAR"
      },
      {
        "myfilter": "8990",
        "name": "899063",
        "label": "KURIKAHANIA"
      },
      {
        "myfilter": "8990",
        "name": "899071",
        "label": "RANI SHIMUL"
      },
      {
        "myfilter": "8990",
        "name": "899079",
        "label": "SINGA BARUNA"
      },
      {
        "myfilter": "8990",
        "name": "899086",
        "label": "SREEBARDI"
      },
      {
        "myfilter": "8990",
        "name": "899094",
        "label": "TANTIHATI"
      },
      {
        "myfilter": "9309",
        "name": "930911",
        "label": "BASAIL"
      },
      {
        "myfilter": "9309",
        "name": "930935",
        "label": "FULKI"
      },
      {
        "myfilter": "9309",
        "name": "930947",
        "label": "HABLA"
      },
      {
        "myfilter": "9309",
        "name": "930959",
        "label": "KANCHANPUR"
      },
      {
        "myfilter": "9309",
        "name": "930983",
        "label": "KAOALJANI"
      },
      {
        "myfilter": "9309",
        "name": "930971",
        "label": "KASHIL"
      },
      {
        "myfilter": "9319",
        "name": "931927",
        "label": "ALOA"
      },
      {
        "myfilter": "9319",
        "name": "931913",
        "label": "ARJUNA"
      },
      {
        "myfilter": "9319",
        "name": "931940",
        "label": "FALDA"
      },
      {
        "myfilter": "9319",
        "name": "931954",
        "label": "GABSARA"
      },
      {
        "myfilter": "9319",
        "name": "931967",
        "label": "GOBINDASI"
      },
      {
        "myfilter": "9319",
        "name": "931981",
        "label": "NIKRAIL"
      },
      {
        "myfilter": "9323",
        "name": "932311",
        "label": "ATIA"
      },
      {
        "myfilter": "9323",
        "name": "932323",
        "label": "DELDUAR"
      },
      {
        "myfilter": "9323",
        "name": "932335",
        "label": "DEOLI"
      },
      {
        "myfilter": "9323",
        "name": "932341",
        "label": "DUBAIL"
      },
      {
        "myfilter": "9323",
        "name": "932347",
        "label": "ELASIN"
      },
      {
        "myfilter": "9323",
        "name": "932359",
        "label": "FAZILHATI"
      },
      {
        "myfilter": "9323",
        "name": "932365",
        "label": "LAUHATI"
      },
      {
        "myfilter": "9323",
        "name": "932371",
        "label": "PATHRAIL"
      },
      {
        "myfilter": "9325",
        "name": "932521",
        "label": "BALIBHADRA"
      },
      {
        "myfilter": "9325",
        "name": "932525",
        "label": "BANIAJAN"
      },
      {
        "myfilter": "9325",
        "name": "932538",
        "label": "BIRTARA"
      },
      {
        "myfilter": "9325",
        "name": "932557",
        "label": "DHOPAKHALI"
      },
      {
        "myfilter": "9325",
        "name": "932547",
        "label": "JADUNATHPUR"
      },
      {
        "myfilter": "9325",
        "name": "932568",
        "label": "JADUNATHPUR-2"
      },
      {
        "myfilter": "9325",
        "name": "932580",
        "label": "MUSUDDI"
      },
      {
        "myfilter": "9325",
        "name": "932585",
        "label": "PAISKA"
      },
      {
        "myfilter": "9328",
        "name": "932815",
        "label": "ANEHOLA"
      },
      {
        "myfilter": "9328",
        "name": "932825",
        "label": "DEOPARA"
      },
      {
        "myfilter": "9328",
        "name": "932817",
        "label": "DEULABARI"
      },
      {
        "myfilter": "9328",
        "name": "932834",
        "label": "DHALA PARA"
      },
      {
        "myfilter": "9328",
        "name": "932843",
        "label": "DIGALKANDI"
      },
      {
        "myfilter": "9328",
        "name": "932851",
        "label": "DIGAR"
      },
      {
        "myfilter": "9328",
        "name": "932860",
        "label": "GHATAIL"
      },
      {
        "myfilter": "9328",
        "name": "932898",
        "label": "GHATAIL CANTT."
      },
      {
        "myfilter": "9328",
        "name": "932869",
        "label": "JAMURIA"
      },
      {
        "myfilter": "9328",
        "name": "932877",
        "label": "LAKHER PARA"
      },
      {
        "myfilter": "9328",
        "name": "932886",
        "label": "RASULPUR"
      },
      {
        "myfilter": "9328",
        "name": "932894",
        "label": "SANDHANPUR"
      },
      {
        "myfilter": "9338",
        "name": "933817",
        "label": "ALAMNAGAR"
      },
      {
        "myfilter": "9338",
        "name": "933821",
        "label": "DHOPAKANDI"
      },
      {
        "myfilter": "9338",
        "name": "933858",
        "label": "HADIRA"
      },
      {
        "myfilter": "9338",
        "name": "933865",
        "label": "HEMNAGAR"
      },
      {
        "myfilter": "9338",
        "name": "933873",
        "label": "JHAWAIL"
      },
      {
        "myfilter": "9338",
        "name": "933880",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "9338",
        "name": "933894",
        "label": "NAGDA SIMLA"
      },
      {
        "myfilter": "9347",
        "name": "934712",
        "label": "BALLA"
      },
      {
        "myfilter": "9347",
        "name": "934714",
        "label": "BANGRA"
      },
      {
        "myfilter": "9347",
        "name": "934721",
        "label": "BIR BASUNDA"
      },
      {
        "myfilter": "9347",
        "name": "934725",
        "label": "DASHKIA"
      },
      {
        "myfilter": "9347",
        "name": "934729",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "9347",
        "name": "934743",
        "label": "GOHALIABARI"
      },
      {
        "myfilter": "9347",
        "name": "934758",
        "label": "KOK DAHARA"
      },
      {
        "myfilter": "9347",
        "name": "934765",
        "label": "NAGBARI"
      },
      {
        "myfilter": "9347",
        "name": "934773",
        "label": "NARANDIA"
      },
      {
        "myfilter": "9347",
        "name": "934780",
        "label": "PAIKARA"
      },
      {
        "myfilter": "9347",
        "name": "934783",
        "label": "PARKI"
      },
      {
        "myfilter": "9347",
        "name": "934794",
        "label": "SAHADEBPUR"
      },
      {
        "myfilter": "9347",
        "name": "934787",
        "label": "SALLA"
      },
      {
        "myfilter": "9357",
        "name": "935721",
        "label": "ALOKDIA"
      },
      {
        "myfilter": "9357",
        "name": "935724",
        "label": "ARANKHOLA"
      },
      {
        "myfilter": "9357",
        "name": "935728",
        "label": "AUSNARA"
      },
      {
        "myfilter": "9357",
        "name": "935766",
        "label": "GOLABARI"
      },
      {
        "myfilter": "9357",
        "name": "935778",
        "label": "MIRZABARI"
      },
      {
        "myfilter": "9357",
        "name": "935792",
        "label": "SOLAKURI"
      },
      {
        "myfilter": "9366",
        "name": "936613",
        "label": "AJGANA"
      },
      {
        "myfilter": "9366",
        "name": "936615",
        "label": "ANAITARA"
      },
      {
        "myfilter": "9366",
        "name": "936623",
        "label": "BAHURIA"
      },
      {
        "myfilter": "9366",
        "name": "936631",
        "label": "BANAIL"
      },
      {
        "myfilter": "9366",
        "name": "936634",
        "label": "BANSHTAIL"
      },
      {
        "myfilter": "9366",
        "name": "936636",
        "label": "BHAORA"
      },
      {
        "myfilter": "9366",
        "name": "936639",
        "label": "BHATGRAM"
      },
      {
        "myfilter": "9366",
        "name": "936647",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "9366",
        "name": "936655",
        "label": "GORAI"
      },
      {
        "myfilter": "9366",
        "name": "936663",
        "label": "JAMURKI"
      },
      {
        "myfilter": "9366",
        "name": "936667",
        "label": "LATIFPUR"
      },
      {
        "myfilter": "9366",
        "name": "936671",
        "label": "MAHERA"
      },
      {
        "myfilter": "9366",
        "name": "936687",
        "label": "TARAFPUR"
      },
      {
        "myfilter": "9366",
        "name": "936694",
        "label": "UARSI"
      },
      {
        "myfilter": "9376",
        "name": "937610",
        "label": "BEKRA"
      },
      {
        "myfilter": "9376",
        "name": "937612",
        "label": "BHADRA"
      },
      {
        "myfilter": "9376",
        "name": "937614",
        "label": "BHARA"
      },
      {
        "myfilter": "9376",
        "name": "937636",
        "label": "DHUBARIA"
      },
      {
        "myfilter": "9376",
        "name": "937621",
        "label": "DUPTIAIR"
      },
      {
        "myfilter": "9376",
        "name": "937643",
        "label": "GAYHATA"
      },
      {
        "myfilter": "9376",
        "name": "937658",
        "label": "MAMUDNAGAR"
      },
      {
        "myfilter": "9376",
        "name": "937665",
        "label": "MOKHNA"
      },
      {
        "myfilter": "9376",
        "name": "937673",
        "label": "NAGARPUR"
      },
      {
        "myfilter": "9376",
        "name": "937680",
        "label": "PAKUTIA"
      },
      {
        "myfilter": "9376",
        "name": "937687",
        "label": "SAHABATPUR"
      },
      {
        "myfilter": "9376",
        "name": "937694",
        "label": "SALIMABAD"
      },
      {
        "myfilter": "9385",
        "name": "938513",
        "label": "BAHERATAIL"
      },
      {
        "myfilter": "9385",
        "name": "938521",
        "label": "DARIAPUR"
      },
      {
        "myfilter": "9385",
        "name": "938527",
        "label": "GAZARIA"
      },
      {
        "myfilter": "9385",
        "name": "938540",
        "label": "HATIBANDHA"
      },
      {
        "myfilter": "9385",
        "name": "938554",
        "label": "JADABPUR"
      },
      {
        "myfilter": "9385",
        "name": "938567",
        "label": "KAKRAJAN"
      },
      {
        "myfilter": "9385",
        "name": "938581",
        "label": "KALIA"
      },
      {
        "myfilter": "9385",
        "name": "938583",
        "label": "KALMEGHA"
      },
      {
        "myfilter": "9395",
        "name": "939537",
        "label": "BAGHIL"
      },
      {
        "myfilter": "9395",
        "name": "939539",
        "label": "DANYA"
      },
      {
        "myfilter": "9395",
        "name": "939541",
        "label": "GALA"
      },
      {
        "myfilter": "9395",
        "name": "939547",
        "label": "GHARINDA"
      },
      {
        "myfilter": "9395",
        "name": "939553",
        "label": "HUGRA"
      },
      {
        "myfilter": "9395",
        "name": "939571",
        "label": "KAKUA"
      },
      {
        "myfilter": "9395",
        "name": "939559",
        "label": "KARATIA"
      },
      {
        "myfilter": "9395",
        "name": "939565",
        "label": "KATULI"
      },
      {
        "myfilter": "9395",
        "name": "939577",
        "label": "MAGRA"
      },
      {
        "myfilter": "9395",
        "name": "939580",
        "label": "MAHAMUDNAGAR"
      },
      {
        "myfilter": "9395",
        "name": "939590",
        "label": "PORABARI"
      },
      {
        "myfilter": "9395",
        "name": "939583",
        "label": "SILIMPUR"
      },
      {
        "myfilter": "0108",
        "name": "010817",
        "label": "BARAI PARA"
      },
      {
        "myfilter": "0108",
        "name": "010825",
        "label": "BEMARTA"
      },
      {
        "myfilter": "0108",
        "name": "010834",
        "label": "BISHNUPUR"
      },
      {
        "myfilter": "0108",
        "name": "010835",
        "label": "DEMA"
      },
      {
        "myfilter": "0108",
        "name": "010851",
        "label": "GOTA PARA"
      },
      {
        "myfilter": "0108",
        "name": "010860",
        "label": "JATRAPUR"
      },
      {
        "myfilter": "0108",
        "name": "010869",
        "label": "KARA PARA"
      },
      {
        "myfilter": "0108",
        "name": "010877",
        "label": "KHANPUR"
      },
      {
        "myfilter": "0108",
        "name": "010886",
        "label": "RAKHALGACHHI"
      },
      {
        "myfilter": "0108",
        "name": "010894",
        "label": "SHAT GAMBUJ"
      },
      {
        "myfilter": "0114",
        "name": "011419",
        "label": "BARA BARIA"
      },
      {
        "myfilter": "0114",
        "name": "011415",
        "label": "CHAR BANIARI"
      },
      {
        "myfilter": "0114",
        "name": "011431",
        "label": "CHITALMARI"
      },
      {
        "myfilter": "0114",
        "name": "011447",
        "label": "HIZLA"
      },
      {
        "myfilter": "0114",
        "name": "011466",
        "label": "KALATALA"
      },
      {
        "myfilter": "0114",
        "name": "011463",
        "label": "SANTOSHPUR"
      },
      {
        "myfilter": "0114",
        "name": "011479",
        "label": "SHIBPUR"
      },
      {
        "myfilter": "0134",
        "name": "013410",
        "label": "BAHIRDIA MANSA"
      },
      {
        "myfilter": "0134",
        "name": "013421",
        "label": "BETAGA"
      },
      {
        "myfilter": "0134",
        "name": "013431",
        "label": "FAKIRHAT"
      },
      {
        "myfilter": "0134",
        "name": "013442",
        "label": "LAKHPUR"
      },
      {
        "myfilter": "0134",
        "name": "013452",
        "label": "MULGHAR"
      },
      {
        "myfilter": "0134",
        "name": "013463",
        "label": "NALDHA MAUBHOG"
      },
      {
        "myfilter": "0134",
        "name": "013473",
        "label": "PILJANGA"
      },
      {
        "myfilter": "0134",
        "name": "013484",
        "label": "SUBHADIA"
      },
      {
        "myfilter": "0138",
        "name": "013815",
        "label": "BADHAL"
      },
      {
        "myfilter": "0138",
        "name": "013828",
        "label": "DHOPAKHALI"
      },
      {
        "myfilter": "0138",
        "name": "013838",
        "label": "GAZALIA"
      },
      {
        "myfilter": "0138",
        "name": "013847",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "0138",
        "name": "013857",
        "label": "KACHUA"
      },
      {
        "myfilter": "0138",
        "name": "013866",
        "label": "MAGHIA"
      },
      {
        "myfilter": "0138",
        "name": "013876",
        "label": "RARI PARA"
      },
      {
        "myfilter": "0156",
        "name": "015617",
        "label": "ATJURI"
      },
      {
        "myfilter": "0156",
        "name": "015628",
        "label": "CHUNKHOLA"
      },
      {
        "myfilter": "0156",
        "name": "015638",
        "label": "GANGNI"
      },
      {
        "myfilter": "0156",
        "name": "015647",
        "label": "GAOLA"
      },
      {
        "myfilter": "0156",
        "name": "015676",
        "label": "KODALIA"
      },
      {
        "myfilter": "0156",
        "name": "015685",
        "label": "KULIA"
      },
      {
        "myfilter": "0156",
        "name": "015695",
        "label": "UDAYPUR"
      },
      {
        "myfilter": "0158",
        "name": "015827",
        "label": "BURIRDANGA"
      },
      {
        "myfilter": "0158",
        "name": "015823",
        "label": "CHANDPI"
      },
      {
        "myfilter": "0158",
        "name": "015829",
        "label": "CHILA"
      },
      {
        "myfilter": "0158",
        "name": "015859",
        "label": "MITHAKHALI"
      },
      {
        "myfilter": "0158",
        "name": "015889",
        "label": "SUNDARBAN"
      },
      {
        "myfilter": "0158",
        "name": "015883",
        "label": "SUNILTALA"
      },
      {
        "myfilter": "0160",
        "name": "016010",
        "label": "BAHARBUNIA"
      },
      {
        "myfilter": "0160",
        "name": "016011",
        "label": "BALAIBUNIA"
      },
      {
        "myfilter": "0160",
        "name": "016017",
        "label": "BANAGRAM"
      },
      {
        "myfilter": "0160",
        "name": "016023",
        "label": "BARAIKHALI"
      },
      {
        "myfilter": "0160",
        "name": "016029",
        "label": "CHINGRAKHALI"
      },
      {
        "myfilter": "0160",
        "name": "016035",
        "label": "DAIBAGNYAHATI"
      },
      {
        "myfilter": "0160",
        "name": "016047",
        "label": "HOGLA PASHA"
      },
      {
        "myfilter": "0160",
        "name": "016041",
        "label": "HOGLABUNIA"
      },
      {
        "myfilter": "0160",
        "name": "016053",
        "label": "JIUDHARA"
      },
      {
        "myfilter": "0160",
        "name": "016059",
        "label": "KHUOLIA"
      },
      {
        "myfilter": "0160",
        "name": "016065",
        "label": "MORRELGANJ"
      },
      {
        "myfilter": "0160",
        "name": "016071",
        "label": "NISHANBARIA"
      },
      {
        "myfilter": "0160",
        "name": "016077",
        "label": "PANCHAKARAN"
      },
      {
        "myfilter": "0160",
        "name": "016083",
        "label": "PUTIKHALI"
      },
      {
        "myfilter": "0160",
        "name": "016089",
        "label": "RAMCHANDRAPUR"
      },
      {
        "myfilter": "0160",
        "name": "016095",
        "label": "TELIGATI"
      },
      {
        "myfilter": "0173",
        "name": "017310",
        "label": "BAINTALA"
      },
      {
        "myfilter": "0173",
        "name": "017311",
        "label": "BANSHTALI"
      },
      {
        "myfilter": "0173",
        "name": "017317",
        "label": "BHOJPATIA"
      },
      {
        "myfilter": "0173",
        "name": "017341",
        "label": "GAURAMBHA"
      },
      {
        "myfilter": "0173",
        "name": "017347",
        "label": "HURKA"
      },
      {
        "myfilter": "0173",
        "name": "017353",
        "label": "MALLIKER BER"
      },
      {
        "myfilter": "0173",
        "name": "017371",
        "label": "PERIKHALI"
      },
      {
        "myfilter": "0173",
        "name": "017377",
        "label": "RAJNAGAR"
      },
      {
        "myfilter": "0173",
        "name": "017383",
        "label": "RAMPAL"
      },
      {
        "myfilter": "0173",
        "name": "017394",
        "label": "UJALKUR"
      },
      {
        "myfilter": "0177",
        "name": "017776",
        "label": "DAKHIN KHALI"
      },
      {
        "myfilter": "0177",
        "name": "017719",
        "label": "DHANSAGAR"
      },
      {
        "myfilter": "0177",
        "name": "017738",
        "label": "KHONTAKATA"
      },
      {
        "myfilter": "0177",
        "name": "017757",
        "label": "ROYENDA"
      },
      {
        "myfilter": "0177",
        "name": "017797",
        "label": "SHARANKHOLA RANGE"
      },
      {
        "myfilter": "1807",
        "name": "180711",
        "label": "AILHAS"
      },
      {
        "myfilter": "1807",
        "name": "180715",
        "label": "BARADI"
      },
      {
        "myfilter": "1807",
        "name": "180713",
        "label": "BELGACHHI"
      },
      {
        "myfilter": "1807",
        "name": "180723",
        "label": "BHANGABARIA"
      },
      {
        "myfilter": "1807",
        "name": "180727",
        "label": "CHITLA"
      },
      {
        "myfilter": "1807",
        "name": "180731",
        "label": "DAUKI"
      },
      {
        "myfilter": "1807",
        "name": "180739",
        "label": "GANGNI"
      },
      {
        "myfilter": "1807",
        "name": "180747",
        "label": "HARDI"
      },
      {
        "myfilter": "1807",
        "name": "180755",
        "label": "JAMJAMI"
      },
      {
        "myfilter": "1807",
        "name": "180763",
        "label": "JEHALA"
      },
      {
        "myfilter": "1807",
        "name": "180751",
        "label": "KALIDASHPUR"
      },
      {
        "myfilter": "1807",
        "name": "180771",
        "label": "KHADIMPUR"
      },
      {
        "myfilter": "1807",
        "name": "180779",
        "label": "KHASKARA"
      },
      {
        "myfilter": "1807",
        "name": "180787",
        "label": "KUMARI"
      },
      {
        "myfilter": "1807",
        "name": "180794",
        "label": "NAGDAHA"
      },
      {
        "myfilter": "1823",
        "name": "182311",
        "label": "ALOKDIA"
      },
      {
        "myfilter": "1823",
        "name": "182323",
        "label": "BEGAMPUR"
      },
      {
        "myfilter": "1823",
        "name": "182347",
        "label": "KUTUBPUR"
      },
      {
        "myfilter": "1823",
        "name": "182359",
        "label": "MOMINPUR"
      },
      {
        "myfilter": "1823",
        "name": "182362",
        "label": "PADMABILA"
      },
      {
        "myfilter": "1823",
        "name": "182371",
        "label": "SHANKAR CHANDRA"
      },
      {
        "myfilter": "1823",
        "name": "182383",
        "label": "TITUDAHA"
      },
      {
        "myfilter": "1831",
        "name": "183111",
        "label": "DAMURHUDA"
      },
      {
        "myfilter": "1831",
        "name": "183135",
        "label": "HOWLI"
      },
      {
        "myfilter": "1831",
        "name": "183147",
        "label": "JURANPUR"
      },
      {
        "myfilter": "1831",
        "name": "183159",
        "label": "KAPASADANGA"
      },
      {
        "myfilter": "1831",
        "name": "183171",
        "label": "KURALGACHHI"
      },
      {
        "myfilter": "1831",
        "name": "183183",
        "label": "NATIPOTA"
      },
      {
        "myfilter": "1831",
        "name": "183123",
        "label": "PERKRISHNAPUR MADNA"
      },
      {
        "myfilter": "1855",
        "name": "185519",
        "label": "ANDULBARIA"
      },
      {
        "myfilter": "1855",
        "name": "185538",
        "label": "BANKA"
      },
      {
        "myfilter": "1855",
        "name": "185542",
        "label": "HASADAH"
      },
      {
        "myfilter": "1855",
        "name": "185550",
        "label": "ROYPUR"
      },
      {
        "myfilter": "1855",
        "name": "185557",
        "label": "SIMANTA"
      },
      {
        "myfilter": "1855",
        "name": "185576",
        "label": "UTHALI"
      },
      {
        "myfilter": "4104",
        "name": "410410",
        "label": "BAGHUTIA"
      },
      {
        "myfilter": "4104",
        "name": "410452",
        "label": "CHALISHIA"
      },
      {
        "myfilter": "4104",
        "name": "410442",
        "label": "PAYRA"
      },
      {
        "myfilter": "4104",
        "name": "410421",
        "label": "PRAMBAG"
      },
      {
        "myfilter": "4104",
        "name": "410463",
        "label": "SIDDHIPASHA"
      },
      {
        "myfilter": "4104",
        "name": "410473",
        "label": "SREEDHARPUR"
      },
      {
        "myfilter": "4104",
        "name": "410484",
        "label": "SUBHA PARA"
      },
      {
        "myfilter": "4104",
        "name": "410427",
        "label": "SUNDOLI"
      },
      {
        "myfilter": "4109",
        "name": "410919",
        "label": "BANDABILLA"
      },
      {
        "myfilter": "4109",
        "name": "410915",
        "label": "BASUARI"
      },
      {
        "myfilter": "4109",
        "name": "410928",
        "label": "DARAJHAT"
      },
      {
        "myfilter": "4109",
        "name": "410938",
        "label": "DHALGRAM"
      },
      {
        "myfilter": "4109",
        "name": "410947",
        "label": "DOHAKULA"
      },
      {
        "myfilter": "4109",
        "name": "410966",
        "label": "JAHARPUR"
      },
      {
        "myfilter": "4109",
        "name": "410957",
        "label": "JAMDIA"
      },
      {
        "myfilter": "4109",
        "name": "410976",
        "label": "NARIKELBARIA"
      },
      {
        "myfilter": "4109",
        "name": "410985",
        "label": "ROYPUR"
      },
      {
        "myfilter": "4111",
        "name": "411114",
        "label": "CHAUGACHHA"
      },
      {
        "myfilter": "4111",
        "name": "411117",
        "label": "DHULIANI"
      },
      {
        "myfilter": "4111",
        "name": "411125",
        "label": "HAKIMPUR"
      },
      {
        "myfilter": "4111",
        "name": "411134",
        "label": "JAGADISHPUR"
      },
      {
        "myfilter": "4111",
        "name": "411151",
        "label": "NARAYANPUR"
      },
      {
        "myfilter": "4111",
        "name": "411160",
        "label": "PASHAPOLE"
      },
      {
        "myfilter": "4111",
        "name": "411169",
        "label": "PATIBILA"
      },
      {
        "myfilter": "4111",
        "name": "411177",
        "label": "PHULSARA"
      },
      {
        "myfilter": "4111",
        "name": "411186",
        "label": "SINGHAJHULI"
      },
      {
        "myfilter": "4111",
        "name": "411194",
        "label": "SUKPUKHURIA"
      },
      {
        "myfilter": "4111",
        "name": "411143",
        "label": "SWARUPDAHA"
      },
      {
        "myfilter": "4147",
        "name": "414710",
        "label": "ARABPUR"
      },
      {
        "myfilter": "4147",
        "name": "414711",
        "label": "BASUNDIA"
      },
      {
        "myfilter": "4147",
        "name": "414723",
        "label": "CHANCHRA"
      },
      {
        "myfilter": "4147",
        "name": "414729",
        "label": "CHURAMANKATI"
      },
      {
        "myfilter": "4147",
        "name": "414735",
        "label": "DIARA"
      },
      {
        "myfilter": "4147",
        "name": "414741",
        "label": "FATHEHPUR"
      },
      {
        "myfilter": "4147",
        "name": "414747",
        "label": "HAIBATPUR"
      },
      {
        "myfilter": "4147",
        "name": "414753",
        "label": "ICHHALI"
      },
      {
        "myfilter": "4147",
        "name": "414798",
        "label": "JESSORE CANTONMENT"
      },
      {
        "myfilter": "4147",
        "name": "414771",
        "label": "KACHUA"
      },
      {
        "myfilter": "4147",
        "name": "414765",
        "label": "KASHIMPUR"
      },
      {
        "myfilter": "4147",
        "name": "414777",
        "label": "LEBUTALA"
      },
      {
        "myfilter": "4147",
        "name": "414783",
        "label": "NARENDRAPUR"
      },
      {
        "myfilter": "4147",
        "name": "414789",
        "label": "NOAPARA"
      },
      {
        "myfilter": "4147",
        "name": "414792",
        "label": "RAMNAGAR"
      },
      {
        "myfilter": "4147",
        "name": "414795",
        "label": "UPASAHAR"
      },
      {
        "myfilter": "4123",
        "name": "412325",
        "label": "BANKRA UNION"
      },
      {
        "myfilter": "4123",
        "name": "412335",
        "label": "GADKHALI"
      },
      {
        "myfilter": "4123",
        "name": "412329",
        "label": "GANGANANDAPUR"
      },
      {
        "myfilter": "4123",
        "name": "412341",
        "label": "HAJIRBAGH"
      },
      {
        "myfilter": "4123",
        "name": "412347",
        "label": "JHIKARGACHHA"
      },
      {
        "myfilter": "4123",
        "name": "412353",
        "label": "MAGURA"
      },
      {
        "myfilter": "4123",
        "name": "412359",
        "label": "NABHARAN"
      },
      {
        "myfilter": "4123",
        "name": "412365",
        "label": "NIBASKHOLA"
      },
      {
        "myfilter": "4123",
        "name": "412371",
        "label": "PANISARA"
      },
      {
        "myfilter": "4123",
        "name": "412383",
        "label": "SHANKARPUR"
      },
      {
        "myfilter": "4123",
        "name": "412389",
        "label": "SHIMULIA"
      },
      {
        "myfilter": "4138",
        "name": "413817",
        "label": "BIDYANANDAKATI"
      },
      {
        "myfilter": "4138",
        "name": "413819",
        "label": "GAURIGHONA"
      },
      {
        "myfilter": "4138",
        "name": "413828",
        "label": "KESHABPUR"
      },
      {
        "myfilter": "4138",
        "name": "413838",
        "label": "MAJIDPUR"
      },
      {
        "myfilter": "4138",
        "name": "413847",
        "label": "MANGALKOT"
      },
      {
        "myfilter": "4138",
        "name": "413857",
        "label": "PANJIA"
      },
      {
        "myfilter": "4138",
        "name": "413866",
        "label": "SAGARDARI"
      },
      {
        "myfilter": "4138",
        "name": "413876",
        "label": "SUFALAKATI"
      },
      {
        "myfilter": "4138",
        "name": "413885",
        "label": "TRIMOHINI"
      },
      {
        "myfilter": "4161",
        "name": "416110",
        "label": "BHOJGATI"
      },
      {
        "myfilter": "4161",
        "name": "416111",
        "label": "CHALUAHATI"
      },
      {
        "myfilter": "4161",
        "name": "416116",
        "label": "DHAKURIA"
      },
      {
        "myfilter": "4161",
        "name": "416122",
        "label": "DURBADANGA"
      },
      {
        "myfilter": "4161",
        "name": "416127",
        "label": "HARIDASKATI"
      },
      {
        "myfilter": "4161",
        "name": "416133",
        "label": "HARIHARNAGAR"
      },
      {
        "myfilter": "4161",
        "name": "416139",
        "label": "JHANPA"
      },
      {
        "myfilter": "4161",
        "name": "416144",
        "label": "KASHIMNAGAR"
      },
      {
        "myfilter": "4161",
        "name": "416150",
        "label": "KHANPUR"
      },
      {
        "myfilter": "4161",
        "name": "416155",
        "label": "KHEDA PARA"
      },
      {
        "myfilter": "4161",
        "name": "416161",
        "label": "KULTIA"
      },
      {
        "myfilter": "4161",
        "name": "416167",
        "label": "MANIRAMPUR"
      },
      {
        "myfilter": "4161",
        "name": "416172",
        "label": "MANOHARPUR"
      },
      {
        "myfilter": "4161",
        "name": "416178",
        "label": "MASWIMNAGAR"
      },
      {
        "myfilter": "4161",
        "name": "416183",
        "label": "NEHALPUR"
      },
      {
        "myfilter": "4161",
        "name": "416189",
        "label": "ROHITA"
      },
      {
        "myfilter": "4161",
        "name": "416194",
        "label": "SHYAMKUR"
      },
      {
        "myfilter": "4190",
        "name": "419013",
        "label": "BAGACHRA"
      },
      {
        "myfilter": "4190",
        "name": "419017",
        "label": "BAHADURPUR"
      },
      {
        "myfilter": "4190",
        "name": "419025",
        "label": "BENAPOLE"
      },
      {
        "myfilter": "4190",
        "name": "419034",
        "label": "DIHI"
      },
      {
        "myfilter": "4190",
        "name": "419043",
        "label": "GOGA"
      },
      {
        "myfilter": "4190",
        "name": "419051",
        "label": "KAYBA"
      },
      {
        "myfilter": "4190",
        "name": "419060",
        "label": "LAKSHMANPUR"
      },
      {
        "myfilter": "4190",
        "name": "419069",
        "label": "NIZAMPUR"
      },
      {
        "myfilter": "4190",
        "name": "419077",
        "label": "PUTKHALI"
      },
      {
        "myfilter": "4190",
        "name": "419086",
        "label": "SHARSHA"
      },
      {
        "myfilter": "4190",
        "name": "419094",
        "label": "ULASHI"
      },
      {
        "myfilter": "4414",
        "name": "441410",
        "label": "BHAYNA"
      },
      {
        "myfilter": "4414",
        "name": "441421",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "4414",
        "name": "441431",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "4414",
        "name": "441452",
        "label": "JORADAHA"
      },
      {
        "myfilter": "4414",
        "name": "441463",
        "label": "KAPASHATI"
      },
      {
        "myfilter": "4414",
        "name": "441442",
        "label": "PHALSI"
      },
      {
        "myfilter": "4414",
        "name": "441473",
        "label": "RAGHUNATHPUR"
      },
      {
        "myfilter": "4414",
        "name": "441484",
        "label": "TAHERHUDA"
      },
      {
        "myfilter": "4419",
        "name": "441911",
        "label": "DOGACHHI"
      },
      {
        "myfilter": "4419",
        "name": "441913",
        "label": "FURSANDI"
      },
      {
        "myfilter": "4419",
        "name": "441915",
        "label": "GANNA"
      },
      {
        "myfilter": "4419",
        "name": "441921",
        "label": "GHORSHAL"
      },
      {
        "myfilter": "4419",
        "name": "441926",
        "label": "HALIDHANI"
      },
      {
        "myfilter": "4419",
        "name": "441931",
        "label": "HARISHANKARPUR"
      },
      {
        "myfilter": "4419",
        "name": "441942",
        "label": "KALICHARANPUR"
      },
      {
        "myfilter": "4419",
        "name": "441947",
        "label": "KUMRABARIA"
      },
      {
        "myfilter": "4419",
        "name": "441952",
        "label": "MADHUHATI"
      },
      {
        "myfilter": "4419",
        "name": "441958",
        "label": "MOHARAJPUR"
      },
      {
        "myfilter": "4419",
        "name": "441963",
        "label": "NALDANGA"
      },
      {
        "myfilter": "4419",
        "name": "441968",
        "label": "PADMAKAR"
      },
      {
        "myfilter": "4419",
        "name": "441973",
        "label": "PAGLAKANAI"
      },
      {
        "myfilter": "4419",
        "name": "441979",
        "label": "PORAHATI"
      },
      {
        "myfilter": "4419",
        "name": "441989",
        "label": "SADHUHATI"
      },
      {
        "myfilter": "4419",
        "name": "441984",
        "label": "SAGANNA"
      },
      {
        "myfilter": "4419",
        "name": "441994",
        "label": "SURAT"
      },
      {
        "myfilter": "4433",
        "name": "443310",
        "label": "BARA BAZAR"
      },
      {
        "myfilter": "4433",
        "name": "443320",
        "label": "JAMAL"
      },
      {
        "myfilter": "4433",
        "name": "443340",
        "label": "KASHTABHANGA"
      },
      {
        "myfilter": "4433",
        "name": "443347",
        "label": "KOLA"
      },
      {
        "myfilter": "4433",
        "name": "443354",
        "label": "MALIAT"
      },
      {
        "myfilter": "4433",
        "name": "443361",
        "label": "NIAMATPUR"
      },
      {
        "myfilter": "4433",
        "name": "443381",
        "label": "RAKHALGACHHI"
      },
      {
        "myfilter": "4433",
        "name": "443374",
        "label": "ROYGRAM"
      },
      {
        "myfilter": "4433",
        "name": "443388",
        "label": "SIMLA ROKONPUR"
      },
      {
        "myfilter": "4433",
        "name": "443333",
        "label": "SUNDARPUR DURGAPUR"
      },
      {
        "myfilter": "4433",
        "name": "443394",
        "label": "TRILOCHANPUR"
      },
      {
        "myfilter": "4442",
        "name": "444213",
        "label": "BALUHAR"
      },
      {
        "myfilter": "4442",
        "name": "444227",
        "label": "DORA"
      },
      {
        "myfilter": "4442",
        "name": "444240",
        "label": "ELANGI"
      },
      {
        "myfilter": "4442",
        "name": "444267",
        "label": "KUSHNA"
      },
      {
        "myfilter": "4442",
        "name": "444281",
        "label": "SABDALPUR"
      },
      {
        "myfilter": "4471",
        "name": "447110",
        "label": "AZAMPUR"
      },
      {
        "myfilter": "4471",
        "name": "447111",
        "label": "BANSHBARIA"
      },
      {
        "myfilter": "4471",
        "name": "447117",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "4471",
        "name": "447123",
        "label": "JADABPUR"
      },
      {
        "myfilter": "4471",
        "name": "447129",
        "label": "KAZIRBER"
      },
      {
        "myfilter": "4471",
        "name": "447135",
        "label": "MANDERBARI"
      },
      {
        "myfilter": "4471",
        "name": "447153",
        "label": "NATIMA"
      },
      {
        "myfilter": "4471",
        "name": "447159",
        "label": "NEPA"
      },
      {
        "myfilter": "4471",
        "name": "447165",
        "label": "PANTHA PARA"
      },
      {
        "myfilter": "4471",
        "name": "447183",
        "label": "S.K.B."
      },
      {
        "myfilter": "4471",
        "name": "447177",
        "label": "SHYAMKUR"
      },
      {
        "myfilter": "4471",
        "name": "447189",
        "label": "SWARUPPUR"
      },
      {
        "myfilter": "4480",
        "name": "448010",
        "label": "ABAIPUR"
      },
      {
        "myfilter": "4480",
        "name": "448012",
        "label": "BAGURA"
      },
      {
        "myfilter": "4480",
        "name": "448018",
        "label": "DHALHARA CHANDRA"
      },
      {
        "myfilter": "4480",
        "name": "448025",
        "label": "DIGNAGAR"
      },
      {
        "myfilter": "4480",
        "name": "448031",
        "label": "DUDHSAR"
      },
      {
        "myfilter": "4480",
        "name": "448044",
        "label": "FULHARI"
      },
      {
        "myfilter": "4480",
        "name": "448050",
        "label": "HAKIMPUR"
      },
      {
        "myfilter": "4480",
        "name": "448056",
        "label": "KANCHERKOL"
      },
      {
        "myfilter": "4480",
        "name": "448037",
        "label": "MANOHARPUR"
      },
      {
        "myfilter": "4480",
        "name": "448063",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "4480",
        "name": "448069",
        "label": "NITYANANDAPUR"
      },
      {
        "myfilter": "4480",
        "name": "448075",
        "label": "SARUTIA"
      },
      {
        "myfilter": "4480",
        "name": "448088",
        "label": "TRIBENI"
      },
      {
        "myfilter": "4480",
        "name": "448094",
        "label": "UMEDPUR"
      },
      {
        "myfilter": "4712",
        "name": "471211",
        "label": "AMIRPUR"
      },
      {
        "myfilter": "4712",
        "name": "471223",
        "label": "BALIADANGA"
      },
      {
        "myfilter": "4712",
        "name": "471235",
        "label": "BATIAGHATA"
      },
      {
        "myfilter": "4712",
        "name": "471247",
        "label": "BHANDERKOTE"
      },
      {
        "myfilter": "4712",
        "name": "471259",
        "label": "GANGARAMPUR"
      },
      {
        "myfilter": "4712",
        "name": "471271",
        "label": "JALMA"
      },
      {
        "myfilter": "4712",
        "name": "471283",
        "label": "SURKHALI"
      },
      {
        "myfilter": "4717",
        "name": "471710",
        "label": "BAJUA"
      },
      {
        "myfilter": "4717",
        "name": "471713",
        "label": "BANISHANTA"
      },
      {
        "myfilter": "4717",
        "name": "471742",
        "label": "DACOPE"
      },
      {
        "myfilter": "4717",
        "name": "471752",
        "label": "KAILASGANJ"
      },
      {
        "myfilter": "4717",
        "name": "471763",
        "label": "KAMARKHOLA"
      },
      {
        "myfilter": "4717",
        "name": "471797",
        "label": "KHULNA RANGE"
      },
      {
        "myfilter": "4717",
        "name": "471721",
        "label": "LAUDUBI"
      },
      {
        "myfilter": "4717",
        "name": "471769",
        "label": "PANKHALI"
      },
      {
        "myfilter": "4717",
        "name": "471773",
        "label": "SUTARKHALI"
      },
      {
        "myfilter": "4717",
        "name": "471784",
        "label": "TILDANGA"
      },
      {
        "myfilter": "4740",
        "name": "474010",
        "label": "ARANGHATA"
      },
      {
        "myfilter": "4740",
        "name": "474017",
        "label": "BARAKPUR"
      },
      {
        "myfilter": "4740",
        "name": "474057",
        "label": "DIGHALIA"
      },
      {
        "myfilter": "4740",
        "name": "474066",
        "label": "GAZIR HAT"
      },
      {
        "myfilter": "4740",
        "name": "474075",
        "label": "JUGIPOLE"
      },
      {
        "myfilter": "4740",
        "name": "474085",
        "label": "SENHATI"
      },
      {
        "myfilter": "4730",
        "name": "473011",
        "label": "ATLIA UNION"
      },
      {
        "myfilter": "4730",
        "name": "473013",
        "label": "BHANDAR PARA"
      },
      {
        "myfilter": "4730",
        "name": "473020",
        "label": "DHAMALIA"
      },
      {
        "myfilter": "4730",
        "name": "473027",
        "label": "DUMURIA"
      },
      {
        "myfilter": "4730",
        "name": "473033",
        "label": "GUTUDIA"
      },
      {
        "myfilter": "4730",
        "name": "473040",
        "label": "KHARNIA"
      },
      {
        "myfilter": "4730",
        "name": "473054",
        "label": "MAGURAGHONA"
      },
      {
        "myfilter": "4730",
        "name": "473047",
        "label": "MAGURKHALI"
      },
      {
        "myfilter": "4730",
        "name": "473061",
        "label": "RAGHUNATHPUR"
      },
      {
        "myfilter": "4730",
        "name": "473067",
        "label": "RANGPUR"
      },
      {
        "myfilter": "4730",
        "name": "473074",
        "label": "RUDAGHARA"
      },
      {
        "myfilter": "4730",
        "name": "473081",
        "label": "SAHAS"
      },
      {
        "myfilter": "4730",
        "name": "473088",
        "label": "SARAPPUR"
      },
      {
        "myfilter": "4730",
        "name": "473094",
        "label": "SOBHANA"
      },
      {
        "myfilter": "4753",
        "name": "475310",
        "label": "AMADI"
      },
      {
        "myfilter": "4753",
        "name": "475311",
        "label": "BAGALI"
      },
      {
        "myfilter": "4753",
        "name": "475322",
        "label": "DAKSHIN BEDKASHI"
      },
      {
        "myfilter": "4753",
        "name": "475355",
        "label": "KOYRA"
      },
      {
        "myfilter": "4753",
        "name": "475372",
        "label": "MAHARAJPUR"
      },
      {
        "myfilter": "4753",
        "name": "475378",
        "label": "MAHESHWARIPUR"
      },
      {
        "myfilter": "4753",
        "name": "475394",
        "label": "UTTAR BEDKASHI"
      },
      {
        "myfilter": "4764",
        "name": "476416",
        "label": "CHANDKHALI"
      },
      {
        "myfilter": "4764",
        "name": "476427",
        "label": "DELUTI"
      },
      {
        "myfilter": "4764",
        "name": "476433",
        "label": "GADAIPUR"
      },
      {
        "myfilter": "4764",
        "name": "476439",
        "label": "GARUIKHALI"
      },
      {
        "myfilter": "4764",
        "name": "476444",
        "label": "HARIDHALI"
      },
      {
        "myfilter": "4764",
        "name": "476450",
        "label": "KAPILMUNI"
      },
      {
        "myfilter": "4764",
        "name": "476461",
        "label": "LASKAR"
      },
      {
        "myfilter": "4764",
        "name": "476467",
        "label": "LATA"
      },
      {
        "myfilter": "4764",
        "name": "476483",
        "label": "RARULI"
      },
      {
        "myfilter": "4764",
        "name": "476489",
        "label": "SHOLADANA"
      },
      {
        "myfilter": "4769",
        "name": "476938",
        "label": "DAMODAR"
      },
      {
        "myfilter": "4769",
        "name": "476957",
        "label": "JAMIRA"
      },
      {
        "myfilter": "4769",
        "name": "476976",
        "label": "PHULTALA"
      },
      {
        "myfilter": "4775",
        "name": "477513",
        "label": "AIJGANTI"
      },
      {
        "myfilter": "4775",
        "name": "477527",
        "label": "GHATBHOGH"
      },
      {
        "myfilter": "4775",
        "name": "477554",
        "label": "NAIHATI"
      },
      {
        "myfilter": "4775",
        "name": "477567",
        "label": "SREEFALTALA"
      },
      {
        "myfilter": "4775",
        "name": "477581",
        "label": "T. S. BAHIRDIA"
      },
      {
        "myfilter": "4794",
        "name": "479413",
        "label": "AJUGARA"
      },
      {
        "myfilter": "4794",
        "name": "479427",
        "label": "BARASAT"
      },
      {
        "myfilter": "4794",
        "name": "479440",
        "label": "MADHUPUR"
      },
      {
        "myfilter": "4794",
        "name": "479454",
        "label": "SACHIADAH"
      },
      {
        "myfilter": "4794",
        "name": "479467",
        "label": "SAGLADAH"
      },
      {
        "myfilter": "4794",
        "name": "479481",
        "label": "TEROKHADA"
      },
      {
        "myfilter": "5015",
        "name": "501513",
        "label": "BAHADURPUR"
      },
      {
        "myfilter": "5015",
        "name": "501527",
        "label": "BAHIR CHAR"
      },
      {
        "myfilter": "5015",
        "name": "501540",
        "label": "CHANDGRAM"
      },
      {
        "myfilter": "5015",
        "name": "501554",
        "label": "DHARAMPUR"
      },
      {
        "myfilter": "5015",
        "name": "501567",
        "label": "JUNIADAHA"
      },
      {
        "myfilter": "5015",
        "name": "501581",
        "label": "MOKARIMPUR"
      },
      {
        "myfilter": "5039",
        "name": "503911",
        "label": "ADABARIA"
      },
      {
        "myfilter": "5039",
        "name": "503913",
        "label": "ARIA"
      },
      {
        "myfilter": "5039",
        "name": "503920",
        "label": "BOALIA"
      },
      {
        "myfilter": "5039",
        "name": "503927",
        "label": "CHILMARI"
      },
      {
        "myfilter": "5039",
        "name": "503933",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "5039",
        "name": "503940",
        "label": "HOGALBARIA"
      },
      {
        "myfilter": "5039",
        "name": "503947",
        "label": "KHALISHAKUNDI"
      },
      {
        "myfilter": "5039",
        "name": "503954",
        "label": "MARICHA"
      },
      {
        "myfilter": "5039",
        "name": "503961",
        "label": "MATHURAPUR"
      },
      {
        "myfilter": "5039",
        "name": "503967",
        "label": "PEARPUR"
      },
      {
        "myfilter": "5039",
        "name": "503974",
        "label": "PHILIPNAGAR"
      },
      {
        "myfilter": "5039",
        "name": "503981",
        "label": "PRAYAGPUR"
      },
      {
        "myfilter": "5039",
        "name": "503988",
        "label": "RAMKRISHNAPUR"
      },
      {
        "myfilter": "5039",
        "name": "503994",
        "label": "REFAYETPUR"
      },
      {
        "myfilter": "5063",
        "name": "506317",
        "label": "AMBARIA"
      },
      {
        "myfilter": "5063",
        "name": "506325",
        "label": "BETBARIA"
      },
      {
        "myfilter": "5063",
        "name": "506331",
        "label": "GOPAGRAM"
      },
      {
        "myfilter": "5063",
        "name": "506337",
        "label": "JANIPUR"
      },
      {
        "myfilter": "5063",
        "name": "506343",
        "label": "JAYANTI HAJRA"
      },
      {
        "myfilter": "5063",
        "name": "506347",
        "label": "KHOKSA"
      },
      {
        "myfilter": "5063",
        "name": "506357",
        "label": "OSMANPUR"
      },
      {
        "myfilter": "5063",
        "name": "506371",
        "label": "SAMASPUR"
      },
      {
        "myfilter": "5063",
        "name": "506377",
        "label": "SHIMULIA"
      },
      {
        "myfilter": "5071",
        "name": "507116",
        "label": "BAGULAT"
      },
      {
        "myfilter": "5071",
        "name": "507117",
        "label": "CHANDPUR"
      },
      {
        "myfilter": "5071",
        "name": "507125",
        "label": "CHAPRA"
      },
      {
        "myfilter": "5071",
        "name": "507134",
        "label": "JADU BOYRA"
      },
      {
        "myfilter": "5071",
        "name": "507143",
        "label": "JAGANNATHPUR"
      },
      {
        "myfilter": "5071",
        "name": "507151",
        "label": "KAYA"
      },
      {
        "myfilter": "5071",
        "name": "507169",
        "label": "NANDALALPUR"
      },
      {
        "myfilter": "5071",
        "name": "507177",
        "label": "PANTI"
      },
      {
        "myfilter": "5071",
        "name": "507186",
        "label": "SADAKI"
      },
      {
        "myfilter": "5071",
        "name": "507190",
        "label": "SADIPUR"
      },
      {
        "myfilter": "5071",
        "name": "507194",
        "label": "SHELAIDAHA"
      },
      {
        "myfilter": "5079",
        "name": "507916",
        "label": "ABDULPUR"
      },
      {
        "myfilter": "5079",
        "name": "507917",
        "label": "AILCHARA"
      },
      {
        "myfilter": "5079",
        "name": "507918",
        "label": "ALAMPUR"
      },
      {
        "myfilter": "5079",
        "name": "507925",
        "label": "BARAKHADA"
      },
      {
        "myfilter": "5079",
        "name": "507931",
        "label": "GOSIND DURGAPUR"
      },
      {
        "myfilter": "5079",
        "name": "507937",
        "label": "HARINARAYANPUR"
      },
      {
        "myfilter": "5079",
        "name": "507944",
        "label": "HATAS HARIPUR"
      },
      {
        "myfilter": "5079",
        "name": "507950",
        "label": "JAGATI"
      },
      {
        "myfilter": "5079",
        "name": "507963",
        "label": "JHAUDIA"
      },
      {
        "myfilter": "5079",
        "name": "507956",
        "label": "JIARAKHI"
      },
      {
        "myfilter": "5079",
        "name": "507982",
        "label": "MANOHARDIA"
      },
      {
        "myfilter": "5079",
        "name": "507975",
        "label": "MAZAMPUR"
      },
      {
        "myfilter": "5079",
        "name": "507988",
        "label": "PAITKABARI"
      },
      {
        "myfilter": "5079",
        "name": "507994",
        "label": "UJANGRAM"
      },
      {
        "myfilter": "5094",
        "name": "509413",
        "label": "AMBARIA"
      },
      {
        "myfilter": "5094",
        "name": "509414",
        "label": "AMLA"
      },
      {
        "myfilter": "5094",
        "name": "509421",
        "label": "BAHALBARIA"
      },
      {
        "myfilter": "5094",
        "name": "509429",
        "label": "BARUI PARA"
      },
      {
        "myfilter": "5094",
        "name": "509436",
        "label": "CHHATIAN"
      },
      {
        "myfilter": "5094",
        "name": "509443",
        "label": "CHITHULIA"
      },
      {
        "myfilter": "5094",
        "name": "509450",
        "label": "DUBAIL"
      },
      {
        "myfilter": "5094",
        "name": "509473",
        "label": "FULBARIA"
      },
      {
        "myfilter": "5094",
        "name": "509458",
        "label": "KURSHA"
      },
      {
        "myfilter": "5094",
        "name": "509465",
        "label": "MALIHAD"
      },
      {
        "myfilter": "5094",
        "name": "509480",
        "label": "PORADAHA"
      },
      {
        "myfilter": "5094",
        "name": "509487",
        "label": "SARDARPUR"
      },
      {
        "myfilter": "5094",
        "name": "509494",
        "label": "TALBARIA"
      },
      {
        "myfilter": "5557",
        "name": "555721",
        "label": "ATHARAKHADA"
      },
      {
        "myfilter": "5557",
        "name": "555725",
        "label": "BAGIA"
      },
      {
        "myfilter": "5557",
        "name": "555723",
        "label": "BIRAIL PALITA"
      },
      {
        "myfilter": "5557",
        "name": "555727",
        "label": "CHAULIA"
      },
      {
        "myfilter": "5557",
        "name": "555733",
        "label": "GOPALGRAM"
      },
      {
        "myfilter": "5557",
        "name": "555740",
        "label": "HAZIPUR"
      },
      {
        "myfilter": "5557",
        "name": "555747",
        "label": "HAZRAPUR"
      },
      {
        "myfilter": "5557",
        "name": "555754",
        "label": "JAGDAL"
      },
      {
        "myfilter": "5557",
        "name": "555761",
        "label": "KASUNDI"
      },
      {
        "myfilter": "5557",
        "name": "555767",
        "label": "KUCHIAMORA"
      },
      {
        "myfilter": "5557",
        "name": "555774",
        "label": "MAGHI"
      },
      {
        "myfilter": "5557",
        "name": "555788",
        "label": "RAGHAB DAIR"
      },
      {
        "myfilter": "5557",
        "name": "555794",
        "label": "SATRUJITPUR"
      },
      {
        "myfilter": "5566",
        "name": "556610",
        "label": "BABUKHALI"
      },
      {
        "myfilter": "5566",
        "name": "556621",
        "label": "BALIDIA"
      },
      {
        "myfilter": "5566",
        "name": "556631",
        "label": "BINODEPUR"
      },
      {
        "myfilter": "5566",
        "name": "556642",
        "label": "DIGHA"
      },
      {
        "myfilter": "5566",
        "name": "556652",
        "label": "MOHAMMADPUR"
      },
      {
        "myfilter": "5566",
        "name": "556663",
        "label": "NAHATA"
      },
      {
        "myfilter": "5566",
        "name": "556673",
        "label": "PALASHBARIA"
      },
      {
        "myfilter": "5566",
        "name": "556684",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "5585",
        "name": "558511",
        "label": "ARPARA"
      },
      {
        "myfilter": "5585",
        "name": "558523",
        "label": "BUNAGATI"
      },
      {
        "myfilter": "5585",
        "name": "558535",
        "label": "DHANESHWARGATI"
      },
      {
        "myfilter": "5585",
        "name": "558547",
        "label": "GANGARAMPUR"
      },
      {
        "myfilter": "5585",
        "name": "558559",
        "label": "SHALIKHA"
      },
      {
        "myfilter": "5585",
        "name": "558571",
        "label": "SHATAKHALI"
      },
      {
        "myfilter": "5585",
        "name": "558583",
        "label": "TALKHARI"
      },
      {
        "myfilter": "5595",
        "name": "559510",
        "label": "AMALSAR"
      },
      {
        "myfilter": "5595",
        "name": "559521",
        "label": "DARIAPUR"
      },
      {
        "myfilter": "5595",
        "name": "559531",
        "label": "GAYESHPUR"
      },
      {
        "myfilter": "5595",
        "name": "559542",
        "label": "KADIR PARA"
      },
      {
        "myfilter": "5595",
        "name": "559552",
        "label": "NAKOL"
      },
      {
        "myfilter": "5595",
        "name": "559563",
        "label": "SABDALPUR"
      },
      {
        "myfilter": "5595",
        "name": "559573",
        "label": "SREEKOL"
      },
      {
        "myfilter": "5595",
        "name": "559584",
        "label": "SREEPUR"
      },
      {
        "myfilter": "5747",
        "name": "574710",
        "label": "BAMANDI"
      },
      {
        "myfilter": "5747",
        "name": "574721",
        "label": "DHANKHOLA"
      },
      {
        "myfilter": "5747",
        "name": "574742",
        "label": "KATHULI"
      },
      {
        "myfilter": "5747",
        "name": "574752",
        "label": "KAZIPUR"
      },
      {
        "myfilter": "5747",
        "name": "574763",
        "label": "MATMURA"
      },
      {
        "myfilter": "5747",
        "name": "574769",
        "label": "ROYPUR"
      },
      {
        "myfilter": "5747",
        "name": "574773",
        "label": "SHAHARBATI"
      },
      {
        "myfilter": "5747",
        "name": "574784",
        "label": "SHOLA TAKA"
      },
      {
        "myfilter": "5747",
        "name": "574794",
        "label": "TENTULBARIA"
      },
      {
        "myfilter": "5787",
        "name": "578714",
        "label": "AMDA"
      },
      {
        "myfilter": "5787",
        "name": "578719",
        "label": "AMJHUPI"
      },
      {
        "myfilter": "5787",
        "name": "578738",
        "label": "BURIPOTA"
      },
      {
        "myfilter": "5787",
        "name": "578757",
        "label": "KUTUBPUR"
      },
      {
        "myfilter": "5787",
        "name": "578795",
        "label": "PIROJPUR"
      },
      {
        "myfilter": "5760",
        "name": "576028",
        "label": "BAGOAN"
      },
      {
        "myfilter": "5760",
        "name": "576047",
        "label": "DARIAPUR"
      },
      {
        "myfilter": "5760",
        "name": "576076",
        "label": "MAHAJANPUR"
      },
      {
        "myfilter": "5760",
        "name": "576085",
        "label": "MONAKHALI"
      },
      {
        "myfilter": "6528",
        "name": "652813",
        "label": "BABRA HACHLA"
      },
      {
        "myfilter": "6528",
        "name": "652815",
        "label": "BAUISENA"
      },
      {
        "myfilter": "6528",
        "name": "652814",
        "label": "BORANAL ELIASABAD"
      },
      {
        "myfilter": "6528",
        "name": "652831",
        "label": "CHANCHARI"
      },
      {
        "myfilter": "6528",
        "name": "652823",
        "label": "HAMIDPUR"
      },
      {
        "myfilter": "6528",
        "name": "652839",
        "label": "JOYNAGAR"
      },
      {
        "myfilter": "6528",
        "name": "652847",
        "label": "KALABARIA"
      },
      {
        "myfilter": "6528",
        "name": "652863",
        "label": "KHASIAL"
      },
      {
        "myfilter": "6528",
        "name": "652871",
        "label": "MAULI"
      },
      {
        "myfilter": "6528",
        "name": "652879",
        "label": "PAHARDANGA"
      },
      {
        "myfilter": "6528",
        "name": "652883",
        "label": "PATGRAM"
      },
      {
        "myfilter": "6528",
        "name": "652887",
        "label": "PERULI"
      },
      {
        "myfilter": "6528",
        "name": "652894",
        "label": "PURULIA"
      },
      {
        "myfilter": "6528",
        "name": "652895",
        "label": "SALAMABAD"
      },
      {
        "myfilter": "6552",
        "name": "655215",
        "label": "DIGHALIA"
      },
      {
        "myfilter": "6552",
        "name": "655218",
        "label": "ITNA"
      },
      {
        "myfilter": "6552",
        "name": "655223",
        "label": "JOYPUR"
      },
      {
        "myfilter": "6552",
        "name": "655231",
        "label": "KASHIPUR"
      },
      {
        "myfilter": "6552",
        "name": "655239",
        "label": "KOTAKUL"
      },
      {
        "myfilter": "6552",
        "name": "655247",
        "label": "LAHURIA"
      },
      {
        "myfilter": "6552",
        "name": "655255",
        "label": "LAKSHMIPASHA"
      },
      {
        "myfilter": "6552",
        "name": "655263",
        "label": "LOHAGARA"
      },
      {
        "myfilter": "6552",
        "name": "655271",
        "label": "MALLIKPUR"
      },
      {
        "myfilter": "6552",
        "name": "655279",
        "label": "NALDI"
      },
      {
        "myfilter": "6552",
        "name": "655287",
        "label": "NOAGRAM"
      },
      {
        "myfilter": "6552",
        "name": "655294",
        "label": "SHALNAGAR"
      },
      {
        "myfilter": "6576",
        "name": "657611",
        "label": "AURIA"
      },
      {
        "myfilter": "6576",
        "name": "657613",
        "label": "BANSHGRAM"
      },
      {
        "myfilter": "6576",
        "name": "657620",
        "label": "BHADRABILA"
      },
      {
        "myfilter": "6576",
        "name": "657627",
        "label": "BICHHALI"
      },
      {
        "myfilter": "6576",
        "name": "657633",
        "label": "CHANDIBARPUR"
      },
      {
        "myfilter": "6576",
        "name": "657640",
        "label": "HABAKHALI"
      },
      {
        "myfilter": "6576",
        "name": "657647",
        "label": "KALORA"
      },
      {
        "myfilter": "6576",
        "name": "657654",
        "label": "MAIJ PARA"
      },
      {
        "myfilter": "6576",
        "name": "657661",
        "label": "MULIA"
      },
      {
        "myfilter": "6576",
        "name": "657674",
        "label": "SAHABAD"
      },
      {
        "myfilter": "6576",
        "name": "657681",
        "label": "SHAIKHATI"
      },
      {
        "myfilter": "6576",
        "name": "657688",
        "label": "SINGASOLPUR"
      },
      {
        "myfilter": "6576",
        "name": "657694",
        "label": "TULARAMPUR"
      },
      {
        "myfilter": "8704",
        "name": "870415",
        "label": "ANULIA"
      },
      {
        "myfilter": "8704",
        "name": "870417",
        "label": "ASSASUNI"
      },
      {
        "myfilter": "8704",
        "name": "870425",
        "label": "BARADAL"
      },
      {
        "myfilter": "8704",
        "name": "870434",
        "label": "BUDHHATA"
      },
      {
        "myfilter": "8704",
        "name": "870443",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "8704",
        "name": "870456",
        "label": "KADAKATI"
      },
      {
        "myfilter": "8704",
        "name": "870460",
        "label": "KHAJRA"
      },
      {
        "myfilter": "8704",
        "name": "870469",
        "label": "KULLA"
      },
      {
        "myfilter": "8704",
        "name": "870477",
        "label": "PRATAP NAGAR"
      },
      {
        "myfilter": "8704",
        "name": "870486",
        "label": "SOBHNALI"
      },
      {
        "myfilter": "8704",
        "name": "870494",
        "label": "SREEULA"
      },
      {
        "myfilter": "8725",
        "name": "872515",
        "label": "DEBHATA"
      },
      {
        "myfilter": "8725",
        "name": "872531",
        "label": "KULIA"
      },
      {
        "myfilter": "8725",
        "name": "872547",
        "label": "NOAPARA"
      },
      {
        "myfilter": "8725",
        "name": "872563",
        "label": "PARULIA"
      },
      {
        "myfilter": "8725",
        "name": "872579",
        "label": "SAKHIPUR"
      },
      {
        "myfilter": "8743",
        "name": "874313",
        "label": "CHANDANPUR"
      },
      {
        "myfilter": "8743",
        "name": "874315",
        "label": "DIARA"
      },
      {
        "myfilter": "8743",
        "name": "874331",
        "label": "HELATALA"
      },
      {
        "myfilter": "8743",
        "name": "874339",
        "label": "JALLABAD"
      },
      {
        "myfilter": "8743",
        "name": "874355",
        "label": "JOGIKHALI"
      },
      {
        "myfilter": "8743",
        "name": "874347",
        "label": "JOYNAGAR"
      },
      {
        "myfilter": "8743",
        "name": "874387",
        "label": "KAILA"
      },
      {
        "myfilter": "8743",
        "name": "874363",
        "label": "KERAGACHHI"
      },
      {
        "myfilter": "8743",
        "name": "874371",
        "label": "KERALKATA"
      },
      {
        "myfilter": "8743",
        "name": "874379",
        "label": "KUSHADANGA"
      },
      {
        "myfilter": "8743",
        "name": "874323",
        "label": "LANGALJHARA"
      },
      {
        "myfilter": "8743",
        "name": "874394",
        "label": "SONABARIA"
      },
      {
        "myfilter": "8747",
        "name": "874713",
        "label": "BHARA SIMLA"
      },
      {
        "myfilter": "8747",
        "name": "874715",
        "label": "BISHNUPUR"
      },
      {
        "myfilter": "8747",
        "name": "874723",
        "label": "CHAMPAPHUL"
      },
      {
        "myfilter": "8747",
        "name": "874731",
        "label": "DAKSHIN SREEPUR"
      },
      {
        "myfilter": "8747",
        "name": "874739",
        "label": "DHALBARIA"
      },
      {
        "myfilter": "8747",
        "name": "874747",
        "label": "KRISHNANAGAR"
      },
      {
        "myfilter": "8747",
        "name": "874755",
        "label": "KUSHLIA"
      },
      {
        "myfilter": "8747",
        "name": "874763",
        "label": "MATHURESHPUR"
      },
      {
        "myfilter": "8747",
        "name": "874771",
        "label": "MAUTALA"
      },
      {
        "myfilter": "8747",
        "name": "874779",
        "label": "NALTA"
      },
      {
        "myfilter": "8747",
        "name": "874787",
        "label": "RATANPUR"
      },
      {
        "myfilter": "8747",
        "name": "874794",
        "label": "TARALI"
      },
      {
        "myfilter": "8782",
        "name": "878213",
        "label": "AGARDARI"
      },
      {
        "myfilter": "8782",
        "name": "878216",
        "label": "ALIPUR"
      },
      {
        "myfilter": "8782",
        "name": "878220",
        "label": "BAIKARI"
      },
      {
        "myfilter": "8782",
        "name": "878227",
        "label": "BALLI"
      },
      {
        "myfilter": "8782",
        "name": "878233",
        "label": "BANSHDAHA"
      },
      {
        "myfilter": "8782",
        "name": "878240",
        "label": "BHOMRA"
      },
      {
        "myfilter": "8782",
        "name": "878247",
        "label": "BRAHMA RAJPUR"
      },
      {
        "myfilter": "8782",
        "name": "878254",
        "label": "DHULIHAR"
      },
      {
        "myfilter": "8782",
        "name": "878251",
        "label": "FINGRI"
      },
      {
        "myfilter": "8782",
        "name": "878261",
        "label": "GHONA"
      },
      {
        "myfilter": "8782",
        "name": "878267",
        "label": "JHAUDANGA"
      },
      {
        "myfilter": "8782",
        "name": "878274",
        "label": "KUSKHALI"
      },
      {
        "myfilter": "8782",
        "name": "878281",
        "label": "LABSA"
      },
      {
        "myfilter": "8782",
        "name": "878294",
        "label": "SHIBPUR"
      },
      {
        "myfilter": "8786",
        "name": "878611",
        "label": "ATULIA"
      },
      {
        "myfilter": "8786",
        "name": "878615",
        "label": "BHURULIA"
      },
      {
        "myfilter": "8786",
        "name": "878623",
        "label": "BURI GOALINI"
      },
      {
        "myfilter": "8786",
        "name": "878631",
        "label": "GABURA"
      },
      {
        "myfilter": "8786",
        "name": "878639",
        "label": "ISHWARIPUR"
      },
      {
        "myfilter": "8786",
        "name": "878647",
        "label": "KAIKHALI"
      },
      {
        "myfilter": "8786",
        "name": "878655",
        "label": "KASHIMARI"
      },
      {
        "myfilter": "8786",
        "name": "878663",
        "label": "MUNSHIGANJ"
      },
      {
        "myfilter": "8786",
        "name": "878671",
        "label": "NURNAGAR"
      },
      {
        "myfilter": "8786",
        "name": "878679",
        "label": "PADMA PUKUR"
      },
      {
        "myfilter": "8786",
        "name": "878687",
        "label": "RAMJAN NAGAR"
      },
      {
        "myfilter": "8786",
        "name": "878697",
        "label": "SATKHIRA RANGE (FLOATIN)"
      },
      {
        "myfilter": "8786",
        "name": "878694",
        "label": "SHYAMNAGAR"
      },
      {
        "myfilter": "8790",
        "name": "879011",
        "label": "DHANDIA"
      },
      {
        "myfilter": "8790",
        "name": "879015",
        "label": "ISLAMKATI"
      },
      {
        "myfilter": "8790",
        "name": "879023",
        "label": "JALALPUR"
      },
      {
        "myfilter": "8790",
        "name": "879031",
        "label": "KHALILNAGAR"
      },
      {
        "myfilter": "8790",
        "name": "879039",
        "label": "KHALISHKHALI"
      },
      {
        "myfilter": "8790",
        "name": "879047",
        "label": "KHESRA"
      },
      {
        "myfilter": "8790",
        "name": "879055",
        "label": "KUMIRA"
      },
      {
        "myfilter": "8790",
        "name": "879063",
        "label": "MAGURA"
      },
      {
        "myfilter": "8790",
        "name": "879071",
        "label": "NAGARGHATA"
      },
      {
        "myfilter": "8790",
        "name": "879079",
        "label": "SARULIA"
      },
      {
        "myfilter": "8790",
        "name": "879087",
        "label": "TALA"
      },
      {
        "myfilter": "8790",
        "name": "879094",
        "label": "TENTULIA"
      },
      {
        "myfilter": "1006",
        "name": "100613",
        "label": "ADAM DIGHI"
      },
      {
        "myfilter": "1006",
        "name": "100627",
        "label": "CHAMPAPUR"
      },
      {
        "myfilter": "1006",
        "name": "100640",
        "label": "CHHATIANGRAM"
      },
      {
        "myfilter": "1006",
        "name": "100654",
        "label": "KUNDAGRAM"
      },
      {
        "myfilter": "1006",
        "name": "100667",
        "label": "NASRATPUR"
      },
      {
        "myfilter": "1006",
        "name": "100681",
        "label": "SHANTAHAR"
      },
      {
        "myfilter": "1020",
        "name": "102023",
        "label": "ERULIA"
      },
      {
        "myfilter": "1020",
        "name": "102025",
        "label": "FAPORE"
      },
      {
        "myfilter": "1020",
        "name": "102034",
        "label": "GOKUL"
      },
      {
        "myfilter": "1020",
        "name": "102047",
        "label": "LAHIRI PARA"
      },
      {
        "myfilter": "1020",
        "name": "102060",
        "label": "NAMUJA"
      },
      {
        "myfilter": "1020",
        "name": "102064",
        "label": "NISHINDARA"
      },
      {
        "myfilter": "1020",
        "name": "102069",
        "label": "NOONGOLA"
      },
      {
        "myfilter": "1020",
        "name": "102073",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "1020",
        "name": "102086",
        "label": "SEKHERKOLA"
      },
      {
        "myfilter": "1020",
        "name": "102077",
        "label": "SHABGRAM"
      },
      {
        "myfilter": "1020",
        "name": "102082",
        "label": "SHAKHARIA"
      },
      {
        "myfilter": "1027",
        "name": "102715",
        "label": "BHANDARBARI"
      },
      {
        "myfilter": "1027",
        "name": "102719",
        "label": "CHAUKIBARI"
      },
      {
        "myfilter": "1027",
        "name": "102728",
        "label": "CHIKASHI"
      },
      {
        "myfilter": "1027",
        "name": "102738",
        "label": "DHUNAT"
      },
      {
        "myfilter": "1027",
        "name": "102747",
        "label": "ELANGI"
      },
      {
        "myfilter": "1027",
        "name": "102757",
        "label": "GOPALNAGAR"
      },
      {
        "myfilter": "1027",
        "name": "102766",
        "label": "GOSAINBARI"
      },
      {
        "myfilter": "1027",
        "name": "102776",
        "label": "KALER PARA"
      },
      {
        "myfilter": "1027",
        "name": "102785",
        "label": "MATHURAPUR"
      },
      {
        "myfilter": "1027",
        "name": "102795",
        "label": "NIMGACHHI"
      },
      {
        "myfilter": "1033",
        "name": "103313",
        "label": "CHAMRUL UNION"
      },
      {
        "myfilter": "1033",
        "name": "103327",
        "label": "DHUPCHANCHIA"
      },
      {
        "myfilter": "1033",
        "name": "103340",
        "label": "GOBINDAPUR"
      },
      {
        "myfilter": "1033",
        "name": "103354",
        "label": "GUNAHAR"
      },
      {
        "myfilter": "1033",
        "name": "103367",
        "label": "TALORA UNION"
      },
      {
        "myfilter": "1033",
        "name": "103381",
        "label": "ZIANAGAR"
      },
      {
        "myfilter": "1040",
        "name": "104011",
        "label": "BALIA DIGHI"
      },
      {
        "myfilter": "1040",
        "name": "104017",
        "label": "DAKSHINPARA"
      },
      {
        "myfilter": "1040",
        "name": "104027",
        "label": "DURGAHATA"
      },
      {
        "myfilter": "1040",
        "name": "104033",
        "label": "GABTALI"
      },
      {
        "myfilter": "1040",
        "name": "104047",
        "label": "KAGAIL"
      },
      {
        "myfilter": "1040",
        "name": "104054",
        "label": "MAHISHABAN"
      },
      {
        "myfilter": "1040",
        "name": "104061",
        "label": "NARUAMALA"
      },
      {
        "myfilter": "1040",
        "name": "104067",
        "label": "NASIPUR"
      },
      {
        "myfilter": "1040",
        "name": "104074",
        "label": "NEPALTALI"
      },
      {
        "myfilter": "1040",
        "name": "104081",
        "label": "RAMESHWARPUR"
      },
      {
        "myfilter": "1040",
        "name": "104088",
        "label": "SONARAI"
      },
      {
        "myfilter": "1054",
        "name": "105413",
        "label": "BIR KEDAR"
      },
      {
        "myfilter": "1054",
        "name": "105419",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "1054",
        "name": "105428",
        "label": "JAMGAON"
      },
      {
        "myfilter": "1054",
        "name": "105438",
        "label": "KAHALOO"
      },
      {
        "myfilter": "1054",
        "name": "105447",
        "label": "KALAI MAJH PARA"
      },
      {
        "myfilter": "1054",
        "name": "105457",
        "label": "MALANCHA"
      },
      {
        "myfilter": "1054",
        "name": "105466",
        "label": "MURAIL"
      },
      {
        "myfilter": "1054",
        "name": "105476",
        "label": "NARAHATTA"
      },
      {
        "myfilter": "1054",
        "name": "105485",
        "label": "PAIKAR"
      },
      {
        "myfilter": "1067",
        "name": "106710",
        "label": "BHATGRAM"
      },
      {
        "myfilter": "1067",
        "name": "106721",
        "label": "BHATRA"
      },
      {
        "myfilter": "1067",
        "name": "106731",
        "label": "BURAIL"
      },
      {
        "myfilter": "1067",
        "name": "106773",
        "label": "NANDIGRAM"
      },
      {
        "myfilter": "1067",
        "name": "106784",
        "label": "THALTA MAJHGRAM"
      },
      {
        "myfilter": "1081",
        "name": "108111",
        "label": "BHELABARI"
      },
      {
        "myfilter": "1081",
        "name": "108112",
        "label": "BOHAIL"
      },
      {
        "myfilter": "1081",
        "name": "108119",
        "label": "CHALUABARI"
      },
      {
        "myfilter": "1081",
        "name": "108125",
        "label": "CHANDAN BAISHA"
      },
      {
        "myfilter": "1081",
        "name": "108131",
        "label": "FULBARI UNION"
      },
      {
        "myfilter": "1081",
        "name": "108137",
        "label": "HAT SHERPUR"
      },
      {
        "myfilter": "1081",
        "name": "108144",
        "label": "KAMALPUR"
      },
      {
        "myfilter": "1081",
        "name": "108156",
        "label": "KARNIBARI"
      },
      {
        "myfilter": "1081",
        "name": "108155",
        "label": "KAZLA"
      },
      {
        "myfilter": "1081",
        "name": "108163",
        "label": "KUTUBPUR"
      },
      {
        "myfilter": "1081",
        "name": "108175",
        "label": "NARCHI"
      },
      {
        "myfilter": "1081",
        "name": "108188",
        "label": "SARIAKANDI"
      },
      {
        "myfilter": "1085",
        "name": "108516",
        "label": "AMROOL"
      },
      {
        "myfilter": "1085",
        "name": "108517",
        "label": "ARIA BAZAR"
      },
      {
        "myfilter": "1085",
        "name": "108518",
        "label": "ASEKPUR"
      },
      {
        "myfilter": "1085",
        "name": "108598",
        "label": "BOGRA CANTONMENT"
      },
      {
        "myfilter": "1085",
        "name": "108519",
        "label": "CHOPINAGAR"
      },
      {
        "myfilter": "1085",
        "name": "108530",
        "label": "GOHAIL"
      },
      {
        "myfilter": "1085",
        "name": "108538",
        "label": "KHARNA"
      },
      {
        "myfilter": "1085",
        "name": "108543",
        "label": "KHOTTA PARA"
      },
      {
        "myfilter": "1085",
        "name": "108551",
        "label": "MADLA"
      },
      {
        "myfilter": "1085",
        "name": "108556",
        "label": "MAJHIRA"
      },
      {
        "myfilter": "1085",
        "name": "108590",
        "label": "SULTANGANJ (PART)"
      },
      {
        "myfilter": "1088",
        "name": "108817",
        "label": "BHABANIPUR"
      },
      {
        "myfilter": "1088",
        "name": "108819",
        "label": "BISHALPUR"
      },
      {
        "myfilter": "1088",
        "name": "108828",
        "label": "GARIDAHA"
      },
      {
        "myfilter": "1088",
        "name": "108838",
        "label": "KHAMARKANDI"
      },
      {
        "myfilter": "1088",
        "name": "108847",
        "label": "KHANPUR"
      },
      {
        "myfilter": "1088",
        "name": "108857",
        "label": "KUSUMBI"
      },
      {
        "myfilter": "1088",
        "name": "108866",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "1088",
        "name": "108877",
        "label": "SHAH-BANDEGI"
      },
      {
        "myfilter": "1088",
        "name": "108885",
        "label": "SHIMABARI"
      },
      {
        "myfilter": "1088",
        "name": "108895",
        "label": "SUGHAT"
      },
      {
        "myfilter": "1094",
        "name": "109411",
        "label": "ATMUL"
      },
      {
        "myfilter": "1094",
        "name": "109415",
        "label": "BIHAR"
      },
      {
        "myfilter": "1094",
        "name": "109423",
        "label": "BURIGANJ"
      },
      {
        "myfilter": "1094",
        "name": "109431",
        "label": "DEULI"
      },
      {
        "myfilter": "1094",
        "name": "109439",
        "label": "KICHAK"
      },
      {
        "myfilter": "1094",
        "name": "109447",
        "label": "MAIDANHATA"
      },
      {
        "myfilter": "1094",
        "name": "109455",
        "label": "MAJHIHATTA"
      },
      {
        "myfilter": "1094",
        "name": "109463",
        "label": "MOKAMTALA"
      },
      {
        "myfilter": "1094",
        "name": "109471",
        "label": "PIRAB"
      },
      {
        "myfilter": "1094",
        "name": "109479",
        "label": "ROYNAGAR"
      },
      {
        "myfilter": "1094",
        "name": "109487",
        "label": "SAIDPUR"
      },
      {
        "myfilter": "1094",
        "name": "109494",
        "label": "SHIBGANJ"
      },
      {
        "myfilter": "1095",
        "name": "109510",
        "label": "BALUA"
      },
      {
        "myfilter": "1095",
        "name": "109531",
        "label": "DIGDAIR"
      },
      {
        "myfilter": "1095",
        "name": "109542",
        "label": "JORGACHHA"
      },
      {
        "myfilter": "1095",
        "name": "109552",
        "label": "MADHUPUR"
      },
      {
        "myfilter": "1095",
        "name": "109581",
        "label": "PAKULLA"
      },
      {
        "myfilter": "1095",
        "name": "109573",
        "label": "SONATALA"
      },
      {
        "myfilter": "1095",
        "name": "109584",
        "label": "TEKANI CHUKAINA"
      },
      {
        "myfilter": "7018",
        "name": "701818",
        "label": "BHOLAHAT"
      },
      {
        "myfilter": "7018",
        "name": "701837",
        "label": "DALDALI"
      },
      {
        "myfilter": "7018",
        "name": "701856",
        "label": "GOHALBARI"
      },
      {
        "myfilter": "7018",
        "name": "701875",
        "label": "JAMBARIA"
      },
      {
        "myfilter": "7066",
        "name": "706617",
        "label": "ALATULI"
      },
      {
        "myfilter": "7066",
        "name": "706618",
        "label": "BALIDANGA"
      },
      {
        "myfilter": "7066",
        "name": "706619",
        "label": "BARAGHARIA"
      },
      {
        "myfilter": "7066",
        "name": "706620",
        "label": "CHAR ANUPNAGAR"
      },
      {
        "myfilter": "7066",
        "name": "706622",
        "label": "CHAR BAGDANGA"
      },
      {
        "myfilter": "7066",
        "name": "706627",
        "label": "DEBINAGAR"
      },
      {
        "myfilter": "7066",
        "name": "706633",
        "label": "GOBRATALA"
      },
      {
        "myfilter": "7066",
        "name": "706639",
        "label": "ISLAMPUR"
      },
      {
        "myfilter": "7066",
        "name": "706644",
        "label": "JHILIM"
      },
      {
        "myfilter": "7066",
        "name": "706655",
        "label": "MAHARAJPUR"
      },
      {
        "myfilter": "7066",
        "name": "706667",
        "label": "NARAYANPUR"
      },
      {
        "myfilter": "7066",
        "name": "706683",
        "label": "RANIHATI"
      },
      {
        "myfilter": "7066",
        "name": "706689",
        "label": "SHAHJAHANPUR"
      },
      {
        "myfilter": "7066",
        "name": "706694",
        "label": "SUNDARPUR"
      },
      {
        "myfilter": "7037",
        "name": "703710",
        "label": "ALINAGAR"
      },
      {
        "myfilter": "7037",
        "name": "703721",
        "label": "BHANGABARIA"
      },
      {
        "myfilter": "7037",
        "name": "703731",
        "label": "BOALIA"
      },
      {
        "myfilter": "7037",
        "name": "703742",
        "label": "CHOWDALA"
      },
      {
        "myfilter": "7037",
        "name": "703752",
        "label": "GOMASTAPUR"
      },
      {
        "myfilter": "7037",
        "name": "703763",
        "label": "PARBATIPUR"
      },
      {
        "myfilter": "7037",
        "name": "703773",
        "label": "RADHANAGAR"
      },
      {
        "myfilter": "7037",
        "name": "703784",
        "label": "ROHANPUR"
      },
      {
        "myfilter": "7056",
        "name": "705619",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "7056",
        "name": "705638",
        "label": "KASBA UNION"
      },
      {
        "myfilter": "7056",
        "name": "705657",
        "label": "NACHOLE"
      },
      {
        "myfilter": "7056",
        "name": "705676",
        "label": "NIZAMPUR"
      },
      {
        "myfilter": "7088",
        "name": "708810",
        "label": "BINODPUR"
      },
      {
        "myfilter": "7088",
        "name": "708811",
        "label": "CHAK KIRTI"
      },
      {
        "myfilter": "7088",
        "name": "708817",
        "label": "DAIPUKURIA"
      },
      {
        "myfilter": "7088",
        "name": "708823",
        "label": "DHAINAGAR"
      },
      {
        "myfilter": "7088",
        "name": "708829",
        "label": "DURLABHPUR"
      },
      {
        "myfilter": "7088",
        "name": "708835",
        "label": "GHORAPAKHIA"
      },
      {
        "myfilter": "7088",
        "name": "708841",
        "label": "KANSAT"
      },
      {
        "myfilter": "7088",
        "name": "708853",
        "label": "MANAKOSA"
      },
      {
        "myfilter": "7088",
        "name": "708847",
        "label": "MOBARAKPUR"
      },
      {
        "myfilter": "7088",
        "name": "708859",
        "label": "NAYA NAOBHANGA"
      },
      {
        "myfilter": "7088",
        "name": "708865",
        "label": "PANKA"
      },
      {
        "myfilter": "7088",
        "name": "708871",
        "label": "SATRUJITPUR"
      },
      {
        "myfilter": "7088",
        "name": "708877",
        "label": "SHAHBAJPUR"
      },
      {
        "myfilter": "7088",
        "name": "708889",
        "label": "SHYAMPUR"
      },
      {
        "myfilter": "7088",
        "name": "708895",
        "label": "UZIRPUR"
      },
      {
        "myfilter": "3813",
        "name": "381315",
        "label": "GOPINATHPUR"
      },
      {
        "myfilter": "3813",
        "name": "381331",
        "label": "RAIKALI"
      },
      {
        "myfilter": "3813",
        "name": "381347",
        "label": "RUKINDIPUR"
      },
      {
        "myfilter": "3813",
        "name": "381363",
        "label": "SONAMUKHI"
      },
      {
        "myfilter": "3813",
        "name": "381379",
        "label": "TILAKPUR"
      },
      {
        "myfilter": "3847",
        "name": "384717",
        "label": "AMDAI"
      },
      {
        "myfilter": "3847",
        "name": "384719",
        "label": "BAMBU"
      },
      {
        "myfilter": "3847",
        "name": "384728",
        "label": "BHADSA"
      },
      {
        "myfilter": "3847",
        "name": "384732",
        "label": "CHAK BARKAT"
      },
      {
        "myfilter": "3847",
        "name": "384738",
        "label": "DHALAHAR"
      },
      {
        "myfilter": "3847",
        "name": "384747",
        "label": "DOGACHHI"
      },
      {
        "myfilter": "3847",
        "name": "384766",
        "label": "JAMALPUR"
      },
      {
        "myfilter": "3847",
        "name": "384776",
        "label": "MOHAMMADABAD"
      },
      {
        "myfilter": "3847",
        "name": "384785",
        "label": "PURANAPAIL"
      },
      {
        "myfilter": "3858",
        "name": "385838",
        "label": "AHMMEDABAD"
      },
      {
        "myfilter": "3858",
        "name": "385866",
        "label": "MATRAI"
      },
      {
        "myfilter": "3858",
        "name": "385876",
        "label": "PUNAT"
      },
      {
        "myfilter": "3858",
        "name": "385885",
        "label": "UDAYPUR"
      },
      {
        "myfilter": "3858",
        "name": "385895",
        "label": "ZINDARPUR"
      },
      {
        "myfilter": "3861",
        "name": "386115",
        "label": "ALAMPUR"
      },
      {
        "myfilter": "3861",
        "name": "386128",
        "label": "BARAIL"
      },
      {
        "myfilter": "3861",
        "name": "386119",
        "label": "BARATARA"
      },
      {
        "myfilter": "3861",
        "name": "386147",
        "label": "KHETLAL"
      },
      {
        "myfilter": "3861",
        "name": "386157",
        "label": "MAMUDPUR"
      },
      {
        "myfilter": "3874",
        "name": "387410",
        "label": "AOLAI"
      },
      {
        "myfilter": "3874",
        "name": "387421",
        "label": "ATAPUR"
      },
      {
        "myfilter": "3874",
        "name": "387431",
        "label": "AYMARASULPUR"
      },
      {
        "myfilter": "3874",
        "name": "387442",
        "label": "BAGJANA"
      },
      {
        "myfilter": "3874",
        "name": "387452",
        "label": "BALIGHATA"
      },
      {
        "myfilter": "3874",
        "name": "387463",
        "label": "DHARANJI"
      },
      {
        "myfilter": "3874",
        "name": "387473",
        "label": "KUSUMBA"
      },
      {
        "myfilter": "3874",
        "name": "387484",
        "label": "MOHAMADPUR"
      },
      {
        "myfilter": "6403",
        "name": "640310",
        "label": "AHSANGANJ"
      },
      {
        "myfilter": "6403",
        "name": "640321",
        "label": "BHOPARA"
      },
      {
        "myfilter": "6403",
        "name": "640331",
        "label": "BISHA"
      },
      {
        "myfilter": "6403",
        "name": "640342",
        "label": "HATKALU PARA"
      },
      {
        "myfilter": "6403",
        "name": "640352",
        "label": "KALIKAPUR"
      },
      {
        "myfilter": "6403",
        "name": "640363",
        "label": "MANIARI"
      },
      {
        "myfilter": "6403",
        "name": "640373",
        "label": "PANCHUPUR"
      },
      {
        "myfilter": "6403",
        "name": "640384",
        "label": "SAHAGOLA"
      },
      {
        "myfilter": "6406",
        "name": "640610",
        "label": "ADHAIPUR"
      },
      {
        "myfilter": "6406",
        "name": "640621",
        "label": "BADALGACHHI"
      },
      {
        "myfilter": "6406",
        "name": "640631",
        "label": "BALUBHARA"
      },
      {
        "myfilter": "6406",
        "name": "640642",
        "label": "BILASBARI"
      },
      {
        "myfilter": "6406",
        "name": "640663",
        "label": "KOLA"
      },
      {
        "myfilter": "6406",
        "name": "640673",
        "label": "MATHURAPUR"
      },
      {
        "myfilter": "6406",
        "name": "640684",
        "label": "MITHAPUR"
      },
      {
        "myfilter": "6406",
        "name": "640652",
        "label": "PAHAR PUR"
      },
      {
        "myfilter": "6428",
        "name": "642810",
        "label": "AGRA DIGUN"
      },
      {
        "myfilter": "6428",
        "name": "642821",
        "label": "ALAMPUR"
      },
      {
        "myfilter": "6428",
        "name": "642831",
        "label": "ARANAGAR"
      },
      {
        "myfilter": "6428",
        "name": "642842",
        "label": "DHAMOIRHAT"
      },
      {
        "myfilter": "6428",
        "name": "642852",
        "label": "ISABPUR"
      },
      {
        "myfilter": "6428",
        "name": "642863",
        "label": "JAHANPUR"
      },
      {
        "myfilter": "6428",
        "name": "642877",
        "label": "KHELNA"
      },
      {
        "myfilter": "6428",
        "name": "642884",
        "label": "OMAR"
      },
      {
        "myfilter": "6450",
        "name": "645015",
        "label": "BHIMPUR"
      },
      {
        "myfilter": "6450",
        "name": "645019",
        "label": "CHANDAS"
      },
      {
        "myfilter": "6450",
        "name": "645028",
        "label": "CHERAGPUR"
      },
      {
        "myfilter": "6450",
        "name": "645038",
        "label": "ENAYETPUR"
      },
      {
        "myfilter": "6450",
        "name": "645047",
        "label": "HATUR"
      },
      {
        "myfilter": "6450",
        "name": "645057",
        "label": "KHAJUR"
      },
      {
        "myfilter": "6450",
        "name": "645066",
        "label": "MAHADEBPUR"
      },
      {
        "myfilter": "6450",
        "name": "645076",
        "label": "ROYGAON"
      },
      {
        "myfilter": "6450",
        "name": "645085",
        "label": "SAFAPUR"
      },
      {
        "myfilter": "6450",
        "name": "645095",
        "label": "UTTARGRAM"
      },
      {
        "myfilter": "6447",
        "name": "644712",
        "label": "BHALAIN"
      },
      {
        "myfilter": "6447",
        "name": "644713",
        "label": "BHARSO"
      },
      {
        "myfilter": "6447",
        "name": "644720",
        "label": "BISHNUPUR"
      },
      {
        "myfilter": "6447",
        "name": "644727",
        "label": "GANESHPUR"
      },
      {
        "myfilter": "6447",
        "name": "644733",
        "label": "KALIKAPUR"
      },
      {
        "myfilter": "6447",
        "name": "644740",
        "label": "KANSO PARA"
      },
      {
        "myfilter": "6447",
        "name": "644747",
        "label": "KASHAB"
      },
      {
        "myfilter": "6447",
        "name": "644754",
        "label": "KUSUMBA"
      },
      {
        "myfilter": "6447",
        "name": "644761",
        "label": "MAINANI"
      },
      {
        "myfilter": "6447",
        "name": "644767",
        "label": "MANDA"
      },
      {
        "myfilter": "6447",
        "name": "644774",
        "label": "NURULLABAD"
      },
      {
        "myfilter": "6447",
        "name": "644781",
        "label": "PARANPUR"
      },
      {
        "myfilter": "6447",
        "name": "644788",
        "label": "PRASADPUR"
      },
      {
        "myfilter": "6447",
        "name": "644794",
        "label": "TENTULIA"
      },
      {
        "myfilter": "6460",
        "name": "646013",
        "label": "BAKTIARPUR"
      },
      {
        "myfilter": "6460",
        "name": "646014",
        "label": "BALIHAR"
      },
      {
        "myfilter": "6460",
        "name": "646021",
        "label": "BARSHAIL"
      },
      {
        "myfilter": "6460",
        "name": "646029",
        "label": "BOALIA"
      },
      {
        "myfilter": "6460",
        "name": "646043",
        "label": "CHANDIPUR"
      },
      {
        "myfilter": "6460",
        "name": "646051",
        "label": "DUBALHATI"
      },
      {
        "myfilter": "6460",
        "name": "646058",
        "label": "HAPANIA"
      },
      {
        "myfilter": "6460",
        "name": "646065",
        "label": "HASHAIGHARI"
      },
      {
        "myfilter": "6460",
        "name": "646073",
        "label": "KIRTIPUR"
      },
      {
        "myfilter": "6460",
        "name": "646036",
        "label": "SAILGACHHI"
      },
      {
        "myfilter": "6460",
        "name": "646087",
        "label": "SEKHERPUR"
      },
      {
        "myfilter": "6460",
        "name": "646094",
        "label": "TILAKPUR"
      },
      {
        "myfilter": "6469",
        "name": "646910",
        "label": "BAHADURPUR"
      },
      {
        "myfilter": "6469",
        "name": "646921",
        "label": "BHABICHA"
      },
      {
        "myfilter": "6469",
        "name": "646931",
        "label": "CHANDAN NAGAR"
      },
      {
        "myfilter": "6469",
        "name": "646942",
        "label": "HAJINAGAR"
      },
      {
        "myfilter": "6469",
        "name": "646952",
        "label": "NIAMATPUR"
      },
      {
        "myfilter": "6469",
        "name": "646963",
        "label": "PARAIL"
      },
      {
        "myfilter": "6469",
        "name": "646973",
        "label": "RASULPUR"
      },
      {
        "myfilter": "6469",
        "name": "646984",
        "label": "SREEMANTAPUR"
      },
      {
        "myfilter": "6475",
        "name": "647512",
        "label": "AKBARPUR"
      },
      {
        "myfilter": "6475",
        "name": "647517",
        "label": "AMAIR"
      },
      {
        "myfilter": "6475",
        "name": "647525",
        "label": "DIBAR"
      },
      {
        "myfilter": "6475",
        "name": "647534",
        "label": "GHOSHNAGAR"
      },
      {
        "myfilter": "6475",
        "name": "647543",
        "label": "KRISHNAPUR"
      },
      {
        "myfilter": "6475",
        "name": "647551",
        "label": "MATINDHAR"
      },
      {
        "myfilter": "6475",
        "name": "647560",
        "label": "NAZIPUR"
      },
      {
        "myfilter": "6475",
        "name": "647569",
        "label": "NIRMAIL"
      },
      {
        "myfilter": "6475",
        "name": "647577",
        "label": "PATICHARA"
      },
      {
        "myfilter": "6475",
        "name": "647586",
        "label": "PATNITALA"
      },
      {
        "myfilter": "6475",
        "name": "647594",
        "label": "SHIHARA"
      },
      {
        "myfilter": "6479",
        "name": "647915",
        "label": "CHHAOR"
      },
      {
        "myfilter": "6479",
        "name": "647923",
        "label": "GANGURIA"
      },
      {
        "myfilter": "6479",
        "name": "647931",
        "label": "GHATNAGAR"
      },
      {
        "myfilter": "6479",
        "name": "647947",
        "label": "MASIDPUR"
      },
      {
        "myfilter": "6479",
        "name": "647955",
        "label": "NITHPUR"
      },
      {
        "myfilter": "6479",
        "name": "647987",
        "label": "TENTULIA"
      },
      {
        "myfilter": "6485",
        "name": "648510",
        "label": "BARGACHHA"
      },
      {
        "myfilter": "6485",
        "name": "648521",
        "label": "EKDALA"
      },
      {
        "myfilter": "6485",
        "name": "648531",
        "label": "GONA"
      },
      {
        "myfilter": "6485",
        "name": "648542",
        "label": "KALIGRAM"
      },
      {
        "myfilter": "6485",
        "name": "648552",
        "label": "KASHIMPUR"
      },
      {
        "myfilter": "6485",
        "name": "648563",
        "label": "MIRAT"
      },
      {
        "myfilter": "6485",
        "name": "648573",
        "label": "PARAIL"
      },
      {
        "myfilter": "6485",
        "name": "648584",
        "label": "RANINAGAR"
      },
      {
        "myfilter": "6486",
        "name": "648617",
        "label": "AIHAI"
      },
      {
        "myfilter": "6486",
        "name": "648639",
        "label": "GOALA"
      },
      {
        "myfilter": "6486",
        "name": "648663",
        "label": "PATHARI"
      },
      {
        "myfilter": "6486",
        "name": "648671",
        "label": "SAPAHAR"
      },
      {
        "myfilter": "6486",
        "name": "648679",
        "label": "SHIRANTI"
      },
      {
        "myfilter": "6486",
        "name": "648694",
        "label": "TILNA"
      },
      {
        "myfilter": "6909",
        "name": "690919",
        "label": "BAGATIPARA"
      },
      {
        "myfilter": "6909",
        "name": "690938",
        "label": "DAYARAMPUR"
      },
      {
        "myfilter": "6909",
        "name": "690942",
        "label": "FHAGURADIAR"
      },
      {
        "myfilter": "6909",
        "name": "690976",
        "label": "JAMNAGAR"
      },
      {
        "myfilter": "6909",
        "name": "690957",
        "label": "PANKA"
      },
      {
        "myfilter": "6915",
        "name": "691521",
        "label": "BARAIGRAM"
      },
      {
        "myfilter": "6915",
        "name": "691523",
        "label": "CHANDI"
      },
      {
        "myfilter": "6915",
        "name": "691535",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "6915",
        "name": "691547",
        "label": "JOARI"
      },
      {
        "myfilter": "6915",
        "name": "691559",
        "label": "JONAIL"
      },
      {
        "myfilter": "6915",
        "name": "691571",
        "label": "MAJGAON"
      },
      {
        "myfilter": "6915",
        "name": "691583",
        "label": "NAGAR"
      },
      {
        "myfilter": "6941",
        "name": "694113",
        "label": "BIAGHAT"
      },
      {
        "myfilter": "6941",
        "name": "694127",
        "label": "CHAPILA"
      },
      {
        "myfilter": "6941",
        "name": "694140",
        "label": "DHARABARISHA"
      },
      {
        "myfilter": "6941",
        "name": "694160",
        "label": "KHUBJIPUR"
      },
      {
        "myfilter": "6941",
        "name": "694167",
        "label": "MOSHINDA"
      },
      {
        "myfilter": "6941",
        "name": "694181",
        "label": "NAZIRPUR"
      },
      {
        "myfilter": "6944",
        "name": "694417",
        "label": "ARBAB"
      },
      {
        "myfilter": "6944",
        "name": "694457",
        "label": "ARJUNPUR BOROMHATI"
      },
      {
        "myfilter": "6944",
        "name": "694419",
        "label": "BILMARIA"
      },
      {
        "myfilter": "6944",
        "name": "694428",
        "label": "CHANGDHUPAIL"
      },
      {
        "myfilter": "6944",
        "name": "694438",
        "label": "DUARIA"
      },
      {
        "myfilter": "6944",
        "name": "694447",
        "label": "DURDURIA"
      },
      {
        "myfilter": "6944",
        "name": "694466",
        "label": "ISHWARDI"
      },
      {
        "myfilter": "6944",
        "name": "694476",
        "label": "KADAM CHILAN"
      },
      {
        "myfilter": "6944",
        "name": "694485",
        "label": "LALPUR"
      },
      {
        "myfilter": "6944",
        "name": "694495",
        "label": "WALIA"
      },
      {
        "myfilter": "6963",
        "name": "696320",
        "label": "BARA HARISHPUR"
      },
      {
        "myfilter": "6963",
        "name": "696323",
        "label": "BIPRA BELGHARIA"
      },
      {
        "myfilter": "6963",
        "name": "696326",
        "label": "BRAHMAPUR"
      },
      {
        "myfilter": "6963",
        "name": "696329",
        "label": "CHHATNI"
      },
      {
        "myfilter": "6963",
        "name": "696336",
        "label": "DIGHAPATIA"
      },
      {
        "myfilter": "6963",
        "name": "696343",
        "label": "HALSA"
      },
      {
        "myfilter": "6963",
        "name": "696351",
        "label": "KAFURIA"
      },
      {
        "myfilter": "6963",
        "name": "696358",
        "label": "KHAJURIA"
      },
      {
        "myfilter": "6963",
        "name": "696365",
        "label": "LAKSHMIPUR KHOLABA"
      },
      {
        "myfilter": "6963",
        "name": "696373",
        "label": "MADHNAGAR"
      },
      {
        "myfilter": "6963",
        "name": "696387",
        "label": "PIPRUL"
      },
      {
        "myfilter": "6963",
        "name": "696394",
        "label": "TEBARIA"
      },
      {
        "myfilter": "6991",
        "name": "699112",
        "label": "CHAMARI"
      },
      {
        "myfilter": "6991",
        "name": "699123",
        "label": "CHAUGRAM"
      },
      {
        "myfilter": "6991",
        "name": "699115",
        "label": "CHHATAR DIGHI"
      },
      {
        "myfilter": "6991",
        "name": "699131",
        "label": "DAHIA"
      },
      {
        "myfilter": "6991",
        "name": "699139",
        "label": "HATIANDAHA"
      },
      {
        "myfilter": "6991",
        "name": "699147",
        "label": "ITALY"
      },
      {
        "myfilter": "6991",
        "name": "699155",
        "label": "KALAM"
      },
      {
        "myfilter": "6991",
        "name": "699163",
        "label": "LALORE"
      },
      {
        "myfilter": "6991",
        "name": "699171",
        "label": "RAMANANDA KHAJURA"
      },
      {
        "myfilter": "6991",
        "name": "699179",
        "label": "SHERKUL"
      },
      {
        "myfilter": "6991",
        "name": "699194",
        "label": "SUKASH"
      },
      {
        "myfilter": "6991",
        "name": "699187",
        "label": "TAJPUR"
      },
      {
        "myfilter": "7605",
        "name": "760515",
        "label": "CHANDBA"
      },
      {
        "myfilter": "7605",
        "name": "760531",
        "label": "DEBOTTAR"
      },
      {
        "myfilter": "7605",
        "name": "760547",
        "label": "EKDANTA"
      },
      {
        "myfilter": "7605",
        "name": "760563",
        "label": "LAKSHMIPUR"
      },
      {
        "myfilter": "7605",
        "name": "760579",
        "label": "MAJH PARA"
      },
      {
        "myfilter": "7616",
        "name": "761615",
        "label": "CHAKLA"
      },
      {
        "myfilter": "7616",
        "name": "761621",
        "label": "DHALAR CHAR"
      },
      {
        "myfilter": "7616",
        "name": "761631",
        "label": "HATURIA NAKALIA"
      },
      {
        "myfilter": "7616",
        "name": "761642",
        "label": "JATSAKHNI"
      },
      {
        "myfilter": "7616",
        "name": "761647",
        "label": "KYTOLA"
      },
      {
        "myfilter": "7616",
        "name": "761652",
        "label": "MASUNDIA"
      },
      {
        "myfilter": "7616",
        "name": "761663",
        "label": "NUTAN BHARENGA"
      },
      {
        "myfilter": "7616",
        "name": "761673",
        "label": "PURAN BHARENGA"
      },
      {
        "myfilter": "7616",
        "name": "761684",
        "label": "RUPPUR"
      },
      {
        "myfilter": "7619",
        "name": "761915",
        "label": "ASHTA MANISHA"
      },
      {
        "myfilter": "7619",
        "name": "761931",
        "label": "BHANGURA"
      },
      {
        "myfilter": "7619",
        "name": "761947",
        "label": "DIL PASAR"
      },
      {
        "myfilter": "7619",
        "name": "761963",
        "label": "KHAN MARICH"
      },
      {
        "myfilter": "7619",
        "name": "761979",
        "label": "PARBHANGURIA"
      },
      {
        "myfilter": "7622",
        "name": "762213",
        "label": "BILCHALAN"
      },
      {
        "myfilter": "7622",
        "name": "762211",
        "label": "CHHAIKHOLA"
      },
      {
        "myfilter": "7622",
        "name": "762225",
        "label": "DANTHIA BAMANGRAM"
      },
      {
        "myfilter": "7622",
        "name": "762234",
        "label": "FAILJANA"
      },
      {
        "myfilter": "7622",
        "name": "762243",
        "label": "GUNAIGACHHA"
      },
      {
        "myfilter": "7622",
        "name": "762251",
        "label": "HANDIAL"
      },
      {
        "myfilter": "7622",
        "name": "762260",
        "label": "HARIPUR"
      },
      {
        "myfilter": "7622",
        "name": "762270",
        "label": "MOTHURAPUR"
      },
      {
        "myfilter": "7622",
        "name": "762277",
        "label": "MULGRAM"
      },
      {
        "myfilter": "7622",
        "name": "762286",
        "label": "NIMAICHARA"
      },
      {
        "myfilter": "7622",
        "name": "762294",
        "label": "PARSHADANGA"
      },
      {
        "myfilter": "7633",
        "name": "763310",
        "label": "BANWARINAGAR"
      },
      {
        "myfilter": "7633",
        "name": "763331",
        "label": "BRI-LAHIRIBARI"
      },
      {
        "myfilter": "7633",
        "name": "763342",
        "label": "DEMRA"
      },
      {
        "myfilter": "7633",
        "name": "763352",
        "label": "FARIDPUR"
      },
      {
        "myfilter": "7633",
        "name": "763363",
        "label": "HADAL"
      },
      {
        "myfilter": "7633",
        "name": "763384",
        "label": "PUNGALI"
      },
      {
        "myfilter": "7639",
        "name": "763921",
        "label": "DASHURIA"
      },
      {
        "myfilter": "7639",
        "name": "763931",
        "label": "LAKSHMIKUNDI"
      },
      {
        "myfilter": "7639",
        "name": "763942",
        "label": "MULADULI"
      },
      {
        "myfilter": "7639",
        "name": "763952",
        "label": "PAKSHI"
      },
      {
        "myfilter": "7639",
        "name": "763963",
        "label": "SAHAPUR"
      },
      {
        "myfilter": "7639",
        "name": "763984",
        "label": "SARA"
      },
      {
        "myfilter": "7639",
        "name": "763973",
        "label": "SILIMPUR"
      },
      {
        "myfilter": "7655",
        "name": "765516",
        "label": "ATAIKOLA"
      },
      {
        "myfilter": "7655",
        "name": "765517",
        "label": "BHARARA"
      },
      {
        "myfilter": "7655",
        "name": "765525",
        "label": "CHAR TARAPUR"
      },
      {
        "myfilter": "7655",
        "name": "765534",
        "label": "DAPUNIA"
      },
      {
        "myfilter": "7655",
        "name": "765543",
        "label": "DOGACHHI"
      },
      {
        "myfilter": "7655",
        "name": "765551",
        "label": "GAYESHPUR"
      },
      {
        "myfilter": "7655",
        "name": "765560",
        "label": "HEMAYETPUR"
      },
      {
        "myfilter": "7655",
        "name": "765569",
        "label": "MALANCHI"
      },
      {
        "myfilter": "7655",
        "name": "765577",
        "label": "MALIGACHHA"
      },
      {
        "myfilter": "7655",
        "name": "765594",
        "label": "SADULLAHPUR"
      },
      {
        "myfilter": "7672",
        "name": "767215",
        "label": "ATAIKOLA"
      },
      {
        "myfilter": "7672",
        "name": "767217",
        "label": "BHULBARIA"
      },
      {
        "myfilter": "7672",
        "name": "767225",
        "label": "DHOPADAHA"
      },
      {
        "myfilter": "7672",
        "name": "767234",
        "label": "DHULAURI"
      },
      {
        "myfilter": "7672",
        "name": "767243",
        "label": "GAURIGRAM"
      },
      {
        "myfilter": "7672",
        "name": "767251",
        "label": "KARANJA"
      },
      {
        "myfilter": "7672",
        "name": "767260",
        "label": "KASHINATHPUR"
      },
      {
        "myfilter": "7672",
        "name": "767269",
        "label": "KHATU PARA"
      },
      {
        "myfilter": "7672",
        "name": "767277",
        "label": "NAGDEMRA"
      },
      {
        "myfilter": "7672",
        "name": "767286",
        "label": "NANDANPUR"
      },
      {
        "myfilter": "7683",
        "name": "768317",
        "label": "AHAMMEDPUR"
      },
      {
        "myfilter": "7683",
        "name": "768385",
        "label": "BHAYNA  (SUJANAGAR)"
      },
      {
        "myfilter": "7683",
        "name": "768319",
        "label": "DULAI"
      },
      {
        "myfilter": "7683",
        "name": "768328",
        "label": "HATKHALI"
      },
      {
        "myfilter": "7683",
        "name": "768338",
        "label": "MANIKHAT"
      },
      {
        "myfilter": "7683",
        "name": "768347",
        "label": "NAZIRGANJ"
      },
      {
        "myfilter": "7683",
        "name": "768357",
        "label": "RANINAGAR"
      },
      {
        "myfilter": "7683",
        "name": "768366",
        "label": "SAGARKANDI"
      },
      {
        "myfilter": "7683",
        "name": "768376",
        "label": "SATBARIA"
      },
      {
        "myfilter": "7683",
        "name": "768395",
        "label": "TANTIBANDA"
      },
      {
        "myfilter": "8110",
        "name": "811021",
        "label": "ARANI"
      },
      {
        "myfilter": "8110",
        "name": "811022",
        "label": "BAJUBAGHA"
      },
      {
        "myfilter": "8110",
        "name": "811023",
        "label": "BAUSA"
      },
      {
        "myfilter": "8110",
        "name": "811055",
        "label": "GARGARI"
      },
      {
        "myfilter": "8110",
        "name": "811063",
        "label": "MANIGRAM"
      },
      {
        "myfilter": "8110",
        "name": "811079",
        "label": "PAKURIA"
      },
      {
        "myfilter": "8112",
        "name": "811220",
        "label": "AUCH PARA"
      },
      {
        "myfilter": "8112",
        "name": "811222",
        "label": "BARA BIHANALI"
      },
      {
        "myfilter": "8112",
        "name": "811224",
        "label": "BASU PARA"
      },
      {
        "myfilter": "8112",
        "name": "811231",
        "label": "DWIPPUR"
      },
      {
        "myfilter": "8112",
        "name": "811250",
        "label": "GANIPUR"
      },
      {
        "myfilter": "8112",
        "name": "811237",
        "label": "GOALKANDI"
      },
      {
        "myfilter": "8112",
        "name": "811244",
        "label": "GOBINDA PARA"
      },
      {
        "myfilter": "8112",
        "name": "811256",
        "label": "HAMIR KUTSHA"
      },
      {
        "myfilter": "8112",
        "name": "811263",
        "label": "JHIKRA"
      },
      {
        "myfilter": "8112",
        "name": "811269",
        "label": "JOGI PARA"
      },
      {
        "myfilter": "8112",
        "name": "811272",
        "label": "KACHHARI KAYALI PARA"
      },
      {
        "myfilter": "8112",
        "name": "811275",
        "label": "MARIA"
      },
      {
        "myfilter": "8112",
        "name": "811282",
        "label": "NARDAS"
      },
      {
        "myfilter": "8112",
        "name": "811285",
        "label": "SONADANGA"
      },
      {
        "myfilter": "8112",
        "name": "811288",
        "label": "SREEPUR"
      },
      {
        "myfilter": "8112",
        "name": "811294",
        "label": "SUBHADANGA"
      },
      {
        "myfilter": "8125",
        "name": "812531",
        "label": "BHAYA LAKSHMIPUR"
      },
      {
        "myfilter": "8125",
        "name": "812539",
        "label": "CHARGHAT"
      },
      {
        "myfilter": "8125",
        "name": "812571",
        "label": "NIMPARA"
      },
      {
        "myfilter": "8125",
        "name": "812587",
        "label": "SALUA"
      },
      {
        "myfilter": "8125",
        "name": "812594",
        "label": "SARDAH"
      },
      {
        "myfilter": "8125",
        "name": "812547",
        "label": "YUSUFPUR"
      },
      {
        "myfilter": "8131",
        "name": "813111",
        "label": "DELUABARI"
      },
      {
        "myfilter": "8131",
        "name": "813123",
        "label": "DHARMAPUR (PANANAGAR)"
      },
      {
        "myfilter": "8131",
        "name": "813135",
        "label": "JHALUKA"
      },
      {
        "myfilter": "8131",
        "name": "813147",
        "label": "JOYNAGAR"
      },
      {
        "myfilter": "8131",
        "name": "813159",
        "label": "KISMAT GANKAIR"
      },
      {
        "myfilter": "8131",
        "name": "813171",
        "label": "MARIA"
      },
      {
        "myfilter": "8131",
        "name": "813183",
        "label": "NOAPARA"
      },
      {
        "myfilter": "8134",
        "name": "813422",
        "label": "BASUDEBPUR"
      },
      {
        "myfilter": "8134",
        "name": "813425",
        "label": "CHAR ASHARIADAHA"
      },
      {
        "myfilter": "8134",
        "name": "813428",
        "label": "DEOPARA"
      },
      {
        "myfilter": "8134",
        "name": "813438",
        "label": "GODAGARI"
      },
      {
        "myfilter": "8134",
        "name": "813447",
        "label": "GOGRAM"
      },
      {
        "myfilter": "8134",
        "name": "813457",
        "label": "MATIKATA"
      },
      {
        "myfilter": "8134",
        "name": "813466",
        "label": "MOHANPUR"
      },
      {
        "myfilter": "8134",
        "name": "813476",
        "label": "PAKRI"
      },
      {
        "myfilter": "8134",
        "name": "813485",
        "label": "RISHIKUL"
      },
      {
        "myfilter": "8153",
        "name": "815313",
        "label": "BAKSHIMAIL"
      },
      {
        "myfilter": "8153",
        "name": "815327",
        "label": "DHURAIL"
      },
      {
        "myfilter": "8153",
        "name": "815340",
        "label": "GHASIGRAM"
      },
      {
        "myfilter": "8153",
        "name": "815354",
        "label": "JAHANABAD"
      },
      {
        "myfilter": "8153",
        "name": "815367",
        "label": "MAUGACHHI"
      },
      {
        "myfilter": "8153",
        "name": "815381",
        "label": "ROYGHATI"
      },
      {
        "myfilter": "8172",
        "name": "817227",
        "label": "BARAGACHHI"
      },
      {
        "myfilter": "8172",
        "name": "817235",
        "label": "DAMKUR"
      },
      {
        "myfilter": "8172",
        "name": "817243",
        "label": "DARSHAN PARA"
      },
      {
        "myfilter": "8172",
        "name": "817251",
        "label": "HARAGRAM"
      },
      {
        "myfilter": "8172",
        "name": "817254",
        "label": "HARIAN"
      },
      {
        "myfilter": "8172",
        "name": "817261",
        "label": "HARIPUR"
      },
      {
        "myfilter": "8172",
        "name": "817265",
        "label": "HUJURI PARA"
      },
      {
        "myfilter": "8172",
        "name": "817287",
        "label": "PARILA"
      },
      {
        "myfilter": "8182",
        "name": "818213",
        "label": "BANESHWAR"
      },
      {
        "myfilter": "8182",
        "name": "818227",
        "label": "BELPUKURIA"
      },
      {
        "myfilter": "8182",
        "name": "818240",
        "label": "BHALUKGACHHI"
      },
      {
        "myfilter": "8182",
        "name": "818254",
        "label": "JEOPARA"
      },
      {
        "myfilter": "8182",
        "name": "818267",
        "label": "PUTHIA"
      },
      {
        "myfilter": "8182",
        "name": "818281",
        "label": "SILMARIA"
      },
      {
        "myfilter": "8194",
        "name": "819427",
        "label": "BADHAIR"
      },
      {
        "myfilter": "8194",
        "name": "819440",
        "label": "CHANDURIA"
      },
      {
        "myfilter": "8194",
        "name": "819454",
        "label": "KALMA"
      },
      {
        "myfilter": "8194",
        "name": "819457",
        "label": "KAMARGAON"
      },
      {
        "myfilter": "8194",
        "name": "819470",
        "label": "PACHANDAR"
      },
      {
        "myfilter": "8194",
        "name": "819477",
        "label": "SARANJAI"
      },
      {
        "myfilter": "8194",
        "name": "819481",
        "label": "TALANDA"
      },
      {
        "myfilter": "8811",
        "name": "881113",
        "label": "BARA DHUL"
      },
      {
        "myfilter": "8811",
        "name": "881127",
        "label": "BELKUCHI"
      },
      {
        "myfilter": "8811",
        "name": "881140",
        "label": "BHANGABARI"
      },
      {
        "myfilter": "8811",
        "name": "881154",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "8811",
        "name": "881167",
        "label": "DHUKARIA BERA"
      },
      {
        "myfilter": "8811",
        "name": "881181",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "8827",
        "name": "882721",
        "label": "BAGUTIA"
      },
      {
        "myfilter": "8827",
        "name": "882723",
        "label": "GHARJAN"
      },
      {
        "myfilter": "8827",
        "name": "882727",
        "label": "KHAS KAULIA"
      },
      {
        "myfilter": "8827",
        "name": "882731",
        "label": "KHAS PUKURIA"
      },
      {
        "myfilter": "8827",
        "name": "882737",
        "label": "OMARPUR"
      },
      {
        "myfilter": "8827",
        "name": "882747",
        "label": "SADIA CHANDPUR"
      },
      {
        "myfilter": "8827",
        "name": "882771",
        "label": "STHAL"
      },
      {
        "myfilter": "8844",
        "name": "884419",
        "label": "BHADRAGHAT"
      },
      {
        "myfilter": "8844",
        "name": "884438",
        "label": "JAMTAIL"
      },
      {
        "myfilter": "8844",
        "name": "884457",
        "label": "JHAWAIL"
      },
      {
        "myfilter": "8844",
        "name": "884476",
        "label": "ROY DAULATPUR"
      },
      {
        "myfilter": "8850",
        "name": "885017",
        "label": "CHALITADANGA"
      },
      {
        "myfilter": "8850",
        "name": "885015",
        "label": "CHAR GIRISH"
      },
      {
        "myfilter": "8850",
        "name": "885025",
        "label": "GANDAIL"
      },
      {
        "myfilter": "8850",
        "name": "885034",
        "label": "KAZIPUR"
      },
      {
        "myfilter": "8850",
        "name": "885043",
        "label": "KHAS RAJBARI"
      },
      {
        "myfilter": "8850",
        "name": "885051",
        "label": "MAIJBARI"
      },
      {
        "myfilter": "8850",
        "name": "885056",
        "label": "MANSUR NAGAR"
      },
      {
        "myfilter": "8850",
        "name": "885060",
        "label": "NATUAR PARA"
      },
      {
        "myfilter": "8850",
        "name": "885069",
        "label": "NISHCHINTAPUR"
      },
      {
        "myfilter": "8850",
        "name": "885077",
        "label": "SONAMUKHI"
      },
      {
        "myfilter": "8850",
        "name": "885086",
        "label": "SUBHAGACHHA"
      },
      {
        "myfilter": "8850",
        "name": "885094",
        "label": "TEKANI"
      },
      {
        "myfilter": "8861",
        "name": "886113",
        "label": "BRAHMAGACHHA"
      },
      {
        "myfilter": "8861",
        "name": "886119",
        "label": "CHANDAIKONA"
      },
      {
        "myfilter": "8861",
        "name": "886128",
        "label": "DHAMAINAGAR"
      },
      {
        "myfilter": "8861",
        "name": "886138",
        "label": "DHANGARA"
      },
      {
        "myfilter": "8861",
        "name": "886147",
        "label": "DHUBIL"
      },
      {
        "myfilter": "8861",
        "name": "886157",
        "label": "GHURKA"
      },
      {
        "myfilter": "8861",
        "name": "886166",
        "label": "NALKA"
      },
      {
        "myfilter": "8861",
        "name": "886176",
        "label": "PANGASHI"
      },
      {
        "myfilter": "8861",
        "name": "886185",
        "label": "SONAKHARA"
      },
      {
        "myfilter": "8867",
        "name": "886712",
        "label": "BELTAIL"
      },
      {
        "myfilter": "8867",
        "name": "886714",
        "label": "GALA"
      },
      {
        "myfilter": "8867",
        "name": "886721",
        "label": "GARADAHA"
      },
      {
        "myfilter": "8867",
        "name": "886787",
        "label": "HABIBULLANAGAR"
      },
      {
        "myfilter": "8867",
        "name": "886729",
        "label": "JALALPUR"
      },
      {
        "myfilter": "8867",
        "name": "886736",
        "label": "KAIJURI"
      },
      {
        "myfilter": "8867",
        "name": "886743",
        "label": "KAYEMPUR"
      },
      {
        "myfilter": "8867",
        "name": "886751",
        "label": "KHUKNI"
      },
      {
        "myfilter": "8867",
        "name": "886758",
        "label": "NARINA"
      },
      {
        "myfilter": "8867",
        "name": "886765",
        "label": "PORJANA"
      },
      {
        "myfilter": "8867",
        "name": "886773",
        "label": "POTAJIA"
      },
      {
        "myfilter": "8867",
        "name": "886780",
        "label": "RUPABATI"
      },
      {
        "myfilter": "8867",
        "name": "886794",
        "label": "SONATANI"
      },
      {
        "myfilter": "8878",
        "name": "887816",
        "label": "BAGHBATI"
      },
      {
        "myfilter": "8878",
        "name": "887817",
        "label": "BAHULI"
      },
      {
        "myfilter": "8878",
        "name": "887894",
        "label": "CHHANGACHHA"
      },
      {
        "myfilter": "8878",
        "name": "887825",
        "label": "KALIA HARIPUR"
      },
      {
        "myfilter": "8878",
        "name": "887834",
        "label": "KAOAKOLA"
      },
      {
        "myfilter": "8878",
        "name": "887843",
        "label": "KHOKSABARI"
      },
      {
        "myfilter": "8878",
        "name": "887851",
        "label": "MECHHRA"
      },
      {
        "myfilter": "8878",
        "name": "887860",
        "label": "RATANKANDI"
      },
      {
        "myfilter": "8878",
        "name": "887869",
        "label": "SAIDABAD"
      },
      {
        "myfilter": "8878",
        "name": "887877",
        "label": "SHIALKUL"
      },
      {
        "myfilter": "8889",
        "name": "888910",
        "label": "BARUHAS"
      },
      {
        "myfilter": "8889",
        "name": "888921",
        "label": "DESHIGRAM"
      },
      {
        "myfilter": "8889",
        "name": "888931",
        "label": "MADHAINAGAR"
      },
      {
        "myfilter": "8889",
        "name": "888942",
        "label": "MAGURA BINOD"
      },
      {
        "myfilter": "8889",
        "name": "888952",
        "label": "NAOGAON"
      },
      {
        "myfilter": "8889",
        "name": "888963",
        "label": "SAGUNA"
      },
      {
        "myfilter": "8889",
        "name": "888973",
        "label": "TALAM"
      },
      {
        "myfilter": "8889",
        "name": "888984",
        "label": "TARASH"
      },
      {
        "myfilter": "8894",
        "name": "889412",
        "label": "BANGALA"
      },
      {
        "myfilter": "8894",
        "name": "889421",
        "label": "BARA PANGASHI"
      },
      {
        "myfilter": "8894",
        "name": "889414",
        "label": "BARAHAR"
      },
      {
        "myfilter": "8894",
        "name": "889429",
        "label": "DURGANAGAR"
      },
      {
        "myfilter": "8894",
        "name": "889436",
        "label": "HATIKUMRUL"
      },
      {
        "myfilter": "8894",
        "name": "889439",
        "label": "KOYRA"
      },
      {
        "myfilter": "8894",
        "name": "889443",
        "label": "MOHANPUR"
      },
      {
        "myfilter": "8894",
        "name": "889451",
        "label": "PANCHA KRUSHI"
      },
      {
        "myfilter": "8894",
        "name": "889458",
        "label": "PURNIMAGANTI"
      },
      {
        "myfilter": "8894",
        "name": "889465",
        "label": "RAMKRISHNAPUR"
      },
      {
        "myfilter": "8894",
        "name": "889473",
        "label": "SALANGA"
      },
      {
        "myfilter": "8894",
        "name": "889480",
        "label": "SALAP"
      },
      {
        "myfilter": "8894",
        "name": "889487",
        "label": "UDHUNIA"
      },
      {
        "myfilter": "8894",
        "name": "889494",
        "label": "ULLAH PARA"
      },
      {
        "myfilter": "2717",
        "name": "271713",
        "label": "AZIMPUR"
      },
      {
        "myfilter": "2717",
        "name": "271719",
        "label": "BHANDARA"
      },
      {
        "myfilter": "2717",
        "name": "271738",
        "label": "BIJORA"
      },
      {
        "myfilter": "2717",
        "name": "271728",
        "label": "BIRAL"
      },
      {
        "myfilter": "2717",
        "name": "271747",
        "label": "DHAMAIR"
      },
      {
        "myfilter": "2717",
        "name": "271757",
        "label": "DHARMAPUR"
      },
      {
        "myfilter": "2717",
        "name": "271766",
        "label": "FARAKKABAD"
      },
      {
        "myfilter": "2717",
        "name": "271776",
        "label": "MANGALPUR"
      },
      {
        "myfilter": "2717",
        "name": "271780",
        "label": "PALASHBARI"
      },
      {
        "myfilter": "2717",
        "name": "271785",
        "label": "RANI PUKUR"
      },
      {
        "myfilter": "2717",
        "name": "271795",
        "label": "SAHARGRAM"
      },
      {
        "myfilter": "2710",
        "name": "271011",
        "label": "BENAIL"
      },
      {
        "myfilter": "2710",
        "name": "271035",
        "label": "DEOR"
      },
      {
        "myfilter": "2710",
        "name": "271047",
        "label": "JOTBANI"
      },
      {
        "myfilter": "2710",
        "name": "271059",
        "label": "KATLA"
      },
      {
        "myfilter": "2710",
        "name": "271071",
        "label": "KHANPUR"
      },
      {
        "myfilter": "2710",
        "name": "271023",
        "label": "MUKUNDAPUR"
      },
      {
        "myfilter": "2710",
        "name": "271083",
        "label": "PALI PRAYAGPUR"
      },
      {
        "myfilter": "2712",
        "name": "271213",
        "label": "BHOGNAGAR"
      },
      {
        "myfilter": "2712",
        "name": "271217",
        "label": "MARICHA"
      },
      {
        "myfilter": "2712",
        "name": "271225",
        "label": "MOHAMMADPUR"
      },
      {
        "myfilter": "2712",
        "name": "271234",
        "label": "MOHANPUR"
      },
      {
        "myfilter": "2712",
        "name": "271243",
        "label": "NIJPARA"
      },
      {
        "myfilter": "2712",
        "name": "271251",
        "label": "PALASHBARI"
      },
      {
        "myfilter": "2712",
        "name": "271260",
        "label": "PALTAPUR"
      },
      {
        "myfilter": "2712",
        "name": "271277",
        "label": "SATAIR"
      },
      {
        "myfilter": "2712",
        "name": "271269",
        "label": "SHATAGRAM"
      },
      {
        "myfilter": "2712",
        "name": "271286",
        "label": "SHIBRAMPUR"
      },
      {
        "myfilter": "2712",
        "name": "271294",
        "label": "SUJALPUR"
      },
      {
        "myfilter": "2721",
        "name": "272113",
        "label": "ATGAON"
      },
      {
        "myfilter": "2721",
        "name": "272127",
        "label": "CHHATAIL"
      },
      {
        "myfilter": "2721",
        "name": "272140",
        "label": "ISHANIA"
      },
      {
        "myfilter": "2721",
        "name": "272154",
        "label": "MUSHIDHAT"
      },
      {
        "myfilter": "2721",
        "name": "272167",
        "label": "NAFANAGAR"
      },
      {
        "myfilter": "2721",
        "name": "272181",
        "label": "RANGAON"
      },
      {
        "myfilter": "2730",
        "name": "273013",
        "label": "ABDULPUR"
      },
      {
        "myfilter": "2730",
        "name": "273015",
        "label": "ALOKDIHI"
      },
      {
        "myfilter": "2730",
        "name": "273023",
        "label": "AMARPUR"
      },
      {
        "myfilter": "2730",
        "name": "273031",
        "label": "AULIA PUKUR"
      },
      {
        "myfilter": "2730",
        "name": "273039",
        "label": "BHIAIL"
      },
      {
        "myfilter": "2730",
        "name": "273047",
        "label": "FATEHJANAPUR"
      },
      {
        "myfilter": "2730",
        "name": "273055",
        "label": "ISABPUR"
      },
      {
        "myfilter": "2730",
        "name": "273063",
        "label": "NASRATPUR"
      },
      {
        "myfilter": "2730",
        "name": "273071",
        "label": "PUNATTI"
      },
      {
        "myfilter": "2730",
        "name": "273079",
        "label": "SAINTARA"
      },
      {
        "myfilter": "2730",
        "name": "273087",
        "label": "SATNALA"
      },
      {
        "myfilter": "2730",
        "name": "273094",
        "label": "TENTULIA"
      },
      {
        "myfilter": "2764",
        "name": "276416",
        "label": "ASKARPUR"
      },
      {
        "myfilter": "2764",
        "name": "276417",
        "label": "AULIAPUR"
      },
      {
        "myfilter": "2764",
        "name": "276425",
        "label": "CHEHELGAZI"
      },
      {
        "myfilter": "2764",
        "name": "276434",
        "label": "FAZILPUR"
      },
      {
        "myfilter": "2764",
        "name": "276443",
        "label": "KAMALPUR"
      },
      {
        "myfilter": "2764",
        "name": "276477",
        "label": "SEKHPURA"
      },
      {
        "myfilter": "2764",
        "name": "276460",
        "label": "SHANKARPUR"
      },
      {
        "myfilter": "2764",
        "name": "276469",
        "label": "SHASHARA"
      },
      {
        "myfilter": "2764",
        "name": "276486",
        "label": "SUNDARBAN"
      },
      {
        "myfilter": "2764",
        "name": "276494",
        "label": "UTHRAIL"
      },
      {
        "myfilter": "2738",
        "name": "273825",
        "label": "ALADIPUR"
      },
      {
        "myfilter": "2738",
        "name": "273828",
        "label": "BETDIGHI"
      },
      {
        "myfilter": "2738",
        "name": "273838",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "2738",
        "name": "273847",
        "label": "ELUARY"
      },
      {
        "myfilter": "2738",
        "name": "273866",
        "label": "KAZIHAL"
      },
      {
        "myfilter": "2738",
        "name": "273876",
        "label": "KHAYERBARI"
      },
      {
        "myfilter": "2738",
        "name": "273884",
        "label": "SHIBNAGAR"
      },
      {
        "myfilter": "2743",
        "name": "274319",
        "label": "BULAKIPUR"
      },
      {
        "myfilter": "2743",
        "name": "274338",
        "label": "GHORAGHAT"
      },
      {
        "myfilter": "2743",
        "name": "274357",
        "label": "PALSA"
      },
      {
        "myfilter": "2743",
        "name": "274376",
        "label": "SINGRA"
      },
      {
        "myfilter": "2747",
        "name": "274713",
        "label": "ALIHAT"
      },
      {
        "myfilter": "2747",
        "name": "274740",
        "label": "BOALDAR"
      },
      {
        "myfilter": "2747",
        "name": "274781",
        "label": "KHATTA MADHAB PARA"
      },
      {
        "myfilter": "2756",
        "name": "275615",
        "label": "DABAR"
      },
      {
        "myfilter": "2756",
        "name": "275631",
        "label": "MUKUNDAPUR"
      },
      {
        "myfilter": "2756",
        "name": "275647",
        "label": "RAMCHANDRAPUR"
      },
      {
        "myfilter": "2756",
        "name": "275663",
        "label": "RASULPUR"
      },
      {
        "myfilter": "2756",
        "name": "275679",
        "label": "SUNDARPUR"
      },
      {
        "myfilter": "2756",
        "name": "275694",
        "label": "TARGAON"
      },
      {
        "myfilter": "2760",
        "name": "276015",
        "label": "ALOKJHARI"
      },
      {
        "myfilter": "2760",
        "name": "276031",
        "label": "ANGAR PARA"
      },
      {
        "myfilter": "2760",
        "name": "276047",
        "label": "BHABKI"
      },
      {
        "myfilter": "2760",
        "name": "276063",
        "label": "BHERBHERI"
      },
      {
        "myfilter": "2760",
        "name": "276079",
        "label": "GOALDIHI"
      },
      {
        "myfilter": "2760",
        "name": "276094",
        "label": "KHAMAR PARA"
      },
      {
        "myfilter": "2769",
        "name": "276913",
        "label": "BHADURIA"
      },
      {
        "myfilter": "2769",
        "name": "276917",
        "label": "BINODNAGAR"
      },
      {
        "myfilter": "2769",
        "name": "276925",
        "label": "DAUDPUR"
      },
      {
        "myfilter": "2769",
        "name": "276943",
        "label": "GOLAPGANJ"
      },
      {
        "myfilter": "2769",
        "name": "276951",
        "label": "JOYPUR"
      },
      {
        "myfilter": "2769",
        "name": "276969",
        "label": "KUSHDAHA"
      },
      {
        "myfilter": "2769",
        "name": "276977",
        "label": "MAHMUDPUR"
      },
      {
        "myfilter": "2769",
        "name": "276986",
        "label": "PUTIMARA"
      },
      {
        "myfilter": "2769",
        "name": "276994",
        "label": "SHALKHURIA"
      },
      {
        "myfilter": "2777",
        "name": "277716",
        "label": "BELAICHANDI"
      },
      {
        "myfilter": "2777",
        "name": "277717",
        "label": "CHANDIPUR"
      },
      {
        "myfilter": "2777",
        "name": "277725",
        "label": "HABRA"
      },
      {
        "myfilter": "2777",
        "name": "277734",
        "label": "HAMIDPUR"
      },
      {
        "myfilter": "2777",
        "name": "277743",
        "label": "HARIRAMPUR"
      },
      {
        "myfilter": "2777",
        "name": "277751",
        "label": "MANMATHAPUR"
      },
      {
        "myfilter": "2777",
        "name": "277760",
        "label": "MOMINPUR"
      },
      {
        "myfilter": "2777",
        "name": "277769",
        "label": "MOSTAFAPUR"
      },
      {
        "myfilter": "2777",
        "name": "277777",
        "label": "PALASHBARI"
      },
      {
        "myfilter": "2777",
        "name": "277786",
        "label": "RAMPUR"
      },
      {
        "myfilter": "3221",
        "name": "322111",
        "label": "ERENDABARI"
      },
      {
        "myfilter": "3221",
        "name": "322123",
        "label": "FAZLUPUR"
      },
      {
        "myfilter": "3221",
        "name": "322135",
        "label": "FULCHHARI"
      },
      {
        "myfilter": "3221",
        "name": "322147",
        "label": "GAZARIA"
      },
      {
        "myfilter": "3221",
        "name": "322159",
        "label": "KANCHI PARA"
      },
      {
        "myfilter": "3221",
        "name": "322171",
        "label": "UDAKHALI"
      },
      {
        "myfilter": "3221",
        "name": "322183",
        "label": "URIA"
      },
      {
        "myfilter": "3224",
        "name": "322412",
        "label": "BADIAKHALI"
      },
      {
        "myfilter": "3224",
        "name": "322414",
        "label": "BALLAMJHAR"
      },
      {
        "myfilter": "3224",
        "name": "322421",
        "label": "BOALI"
      },
      {
        "myfilter": "3224",
        "name": "322436",
        "label": "GHAGOA"
      },
      {
        "myfilter": "3224",
        "name": "322443",
        "label": "GIDARI"
      },
      {
        "myfilter": "3224",
        "name": "322451",
        "label": "KAMARJANI"
      },
      {
        "myfilter": "3224",
        "name": "322458",
        "label": "KHOLAHATI"
      },
      {
        "myfilter": "3224",
        "name": "322465",
        "label": "KUPTALA"
      },
      {
        "myfilter": "3224",
        "name": "322473",
        "label": "LAKSHMIPUR"
      },
      {
        "myfilter": "3224",
        "name": "322480",
        "label": "MALIBARI"
      },
      {
        "myfilter": "3224",
        "name": "322485",
        "label": "MOLLAR CHAR"
      },
      {
        "myfilter": "3224",
        "name": "322487",
        "label": "RAMCHANDRAPUR"
      },
      {
        "myfilter": "3224",
        "name": "322494",
        "label": "SAHA PARA"
      },
      {
        "myfilter": "3230",
        "name": "323010",
        "label": "DARBASTA"
      },
      {
        "myfilter": "3230",
        "name": "323011",
        "label": "FULBARI"
      },
      {
        "myfilter": "3230",
        "name": "323016",
        "label": "GUMANIGANJ"
      },
      {
        "myfilter": "3230",
        "name": "323022",
        "label": "HARIRAMPUR"
      },
      {
        "myfilter": "3230",
        "name": "323027",
        "label": "KAMARDAHA"
      },
      {
        "myfilter": "3230",
        "name": "323033",
        "label": "KAMDIA"
      },
      {
        "myfilter": "3230",
        "name": "323039",
        "label": "KATABARI"
      },
      {
        "myfilter": "3230",
        "name": "323044",
        "label": "KOCHASAHAR"
      },
      {
        "myfilter": "3230",
        "name": "323050",
        "label": "MAHIMAGANJ"
      },
      {
        "myfilter": "3230",
        "name": "323055",
        "label": "NAKAI"
      },
      {
        "myfilter": "3230",
        "name": "323061",
        "label": "RAJAHAR"
      },
      {
        "myfilter": "3230",
        "name": "323067",
        "label": "RAKHAL BURUZ"
      },
      {
        "myfilter": "3230",
        "name": "323078",
        "label": "SAPMARA"
      },
      {
        "myfilter": "3230",
        "name": "323083",
        "label": "SHAKHAHAR"
      },
      {
        "myfilter": "3230",
        "name": "323072",
        "label": "SHALMARA"
      },
      {
        "myfilter": "3230",
        "name": "323089",
        "label": "SHIBPUR"
      },
      {
        "myfilter": "3230",
        "name": "323094",
        "label": "TALUK KANUPUR"
      },
      {
        "myfilter": "3267",
        "name": "326785",
        "label": "PALASHBARI"
      },
      {
        "myfilter": "3267",
        "name": "326713",
        "label": "BARISAL"
      },
      {
        "myfilter": "3267",
        "name": "326719",
        "label": "BETKAPA"
      },
      {
        "myfilter": "3267",
        "name": "326728",
        "label": "HARINATHPUR"
      },
      {
        "myfilter": "3267",
        "name": "326738",
        "label": "HOSSAINPUR"
      },
      {
        "myfilter": "3267",
        "name": "326747",
        "label": "KISHOREGARI"
      },
      {
        "myfilter": "3267",
        "name": "326766",
        "label": "MANOHARPUR"
      },
      {
        "myfilter": "3267",
        "name": "326757",
        "label": "MOHADIPUR"
      },
      {
        "myfilter": "3267",
        "name": "326776",
        "label": "PABNAPUR"
      },
      {
        "myfilter": "3282",
        "name": "328213",
        "label": "BANAGRAM"
      },
      {
        "myfilter": "3282",
        "name": "328217",
        "label": "BHATGRAM"
      },
      {
        "myfilter": "3282",
        "name": "328225",
        "label": "DAMODARPUR"
      },
      {
        "myfilter": "3282",
        "name": "328234",
        "label": "DHAPERHAT"
      },
      {
        "myfilter": "3282",
        "name": "328243",
        "label": "FARIDPUR"
      },
      {
        "myfilter": "3282",
        "name": "328251",
        "label": "IDILPUR"
      },
      {
        "myfilter": "3282",
        "name": "328260",
        "label": "JAMALPUR"
      },
      {
        "myfilter": "3282",
        "name": "328277",
        "label": "KAMAR PARA"
      },
      {
        "myfilter": "3282",
        "name": "328269",
        "label": "KHURDA KAMARPUR"
      },
      {
        "myfilter": "3282",
        "name": "328286",
        "label": "NALDANGA"
      },
      {
        "myfilter": "3282",
        "name": "328294",
        "label": "RASULPUR"
      },
      {
        "myfilter": "3288",
        "name": "328813",
        "label": "BHARTKHALI"
      },
      {
        "myfilter": "3288",
        "name": "328819",
        "label": "BONAR PARA"
      },
      {
        "myfilter": "3288",
        "name": "328828",
        "label": "GHURIDAHA"
      },
      {
        "myfilter": "3288",
        "name": "328838",
        "label": "HALDIA"
      },
      {
        "myfilter": "3288",
        "name": "328847",
        "label": "JUMMERBARI"
      },
      {
        "myfilter": "3288",
        "name": "328857",
        "label": "KACHUA"
      },
      {
        "myfilter": "3288",
        "name": "328866",
        "label": "KAMALER PARA"
      },
      {
        "myfilter": "3288",
        "name": "328895",
        "label": "MUKTANAGAR"
      },
      {
        "myfilter": "3288",
        "name": "328876",
        "label": "PADUMSAHAR"
      },
      {
        "myfilter": "3288",
        "name": "328885",
        "label": "SAGHATA"
      },
      {
        "myfilter": "3291",
        "name": "329111",
        "label": "BAMANDANGA"
      },
      {
        "myfilter": "3291",
        "name": "329112",
        "label": "BELKA"
      },
      {
        "myfilter": "3291",
        "name": "329118",
        "label": "CHANDIPUR"
      },
      {
        "myfilter": "3291",
        "name": "329125",
        "label": "CHHAPARHATI"
      },
      {
        "myfilter": "3291",
        "name": "329131",
        "label": "DAHABANDA"
      },
      {
        "myfilter": "3291",
        "name": "329137",
        "label": "DHOPADANGA"
      },
      {
        "myfilter": "3291",
        "name": "329144",
        "label": "HARIPUR"
      },
      {
        "myfilter": "3291",
        "name": "329150",
        "label": "KANCHIBARI"
      },
      {
        "myfilter": "3291",
        "name": "329156",
        "label": "KAPASIA"
      },
      {
        "myfilter": "3291",
        "name": "329163",
        "label": "RAMJIBAN"
      },
      {
        "myfilter": "3291",
        "name": "329175",
        "label": "SARBANANDA"
      },
      {
        "myfilter": "3291",
        "name": "329169",
        "label": "SHANTIRAM"
      },
      {
        "myfilter": "3291",
        "name": "329182",
        "label": "SONAROY"
      },
      {
        "myfilter": "3291",
        "name": "329188",
        "label": "SREEPUR"
      },
      {
        "myfilter": "3291",
        "name": "329194",
        "label": "TARAPUR"
      },
      {
        "myfilter": "4906",
        "name": "490613",
        "label": "ANDHARI JHAR"
      },
      {
        "myfilter": "4906",
        "name": "490638",
        "label": "BANGASONAHAT"
      },
      {
        "myfilter": "4906",
        "name": "490619",
        "label": "BHURUNGAMARI"
      },
      {
        "myfilter": "4906",
        "name": "490628",
        "label": "BOLDIA"
      },
      {
        "myfilter": "4906",
        "name": "490647",
        "label": "CHAR BHURUNGAMARI"
      },
      {
        "myfilter": "4906",
        "name": "490657",
        "label": "JOYMANIRHAT"
      },
      {
        "myfilter": "4906",
        "name": "490666",
        "label": "PAIKER CHHARA"
      },
      {
        "myfilter": "4906",
        "name": "490676",
        "label": "PATHARDUBI"
      },
      {
        "myfilter": "4906",
        "name": "490685",
        "label": "SHILKHURI"
      },
      {
        "myfilter": "4906",
        "name": "490695",
        "label": "TILAI"
      },
      {
        "myfilter": "4908",
        "name": "490819",
        "label": "CHAR RAJIBPUR"
      },
      {
        "myfilter": "4908",
        "name": "490857",
        "label": "KODAILKATI"
      },
      {
        "myfilter": "4908",
        "name": "490876",
        "label": "MOHANGANJ"
      },
      {
        "myfilter": "4909",
        "name": "490911",
        "label": "ASHTAMIR CHAR"
      },
      {
        "myfilter": "4909",
        "name": "490923",
        "label": "CHILMARI"
      },
      {
        "myfilter": "4909",
        "name": "490947",
        "label": "NAYERHAT"
      },
      {
        "myfilter": "4909",
        "name": "490959",
        "label": "RAMNA"
      },
      {
        "myfilter": "4909",
        "name": "490971",
        "label": "RANIGANJ"
      },
      {
        "myfilter": "4909",
        "name": "490983",
        "label": "THANAHAT"
      },
      {
        "myfilter": "4952",
        "name": "495217",
        "label": "BELGACHHA"
      },
      {
        "myfilter": "4952",
        "name": "495219",
        "label": "BHOGDANGA"
      },
      {
        "myfilter": "4952",
        "name": "495228",
        "label": "GHOGADAHA"
      },
      {
        "myfilter": "4952",
        "name": "495238",
        "label": "HOLOKHANA"
      },
      {
        "myfilter": "4952",
        "name": "495247",
        "label": "JATRAPUR"
      },
      {
        "myfilter": "4952",
        "name": "495257",
        "label": "KANTHALBARI"
      },
      {
        "myfilter": "4952",
        "name": "495276",
        "label": "MOGALBACHHA"
      },
      {
        "myfilter": "4952",
        "name": "495285",
        "label": "PUNCHGACHHI"
      },
      {
        "myfilter": "4961",
        "name": "496111",
        "label": "BALLABHER KHAS"
      },
      {
        "myfilter": "4961",
        "name": "496112",
        "label": "BAMANDANGA"
      },
      {
        "myfilter": "4961",
        "name": "496118",
        "label": "BERUBARI"
      },
      {
        "myfilter": "4961",
        "name": "496125",
        "label": "BHITARBAND"
      },
      {
        "myfilter": "4961",
        "name": "496131",
        "label": "HASNABAD"
      },
      {
        "myfilter": "4961",
        "name": "496137",
        "label": "KACHAKATA"
      },
      {
        "myfilter": "4961",
        "name": "496144",
        "label": "KALIGANJ"
      },
      {
        "myfilter": "4961",
        "name": "496150",
        "label": "KEDAR"
      },
      {
        "myfilter": "4961",
        "name": "496163",
        "label": "NARAYANPUR"
      },
      {
        "myfilter": "4961",
        "name": "496169",
        "label": "NEWASHI"
      },
      {
        "myfilter": "4961",
        "name": "496175",
        "label": "NOONKHAWA"
      },
      {
        "myfilter": "4961",
        "name": "496188",
        "label": "RAMKHANA"
      },
      {
        "myfilter": "4961",
        "name": "496182",
        "label": "ROYGANJ"
      },
      {
        "myfilter": "4961",
        "name": "496194",
        "label": "SANTOSHPUR"
      },
      {
        "myfilter": "4918",
        "name": "491813",
        "label": "BARA BHITA"
      },
      {
        "myfilter": "4918",
        "name": "491827",
        "label": "BHANAGMORE"
      },
      {
        "myfilter": "4918",
        "name": "491854",
        "label": "KASHIPUR"
      },
      {
        "myfilter": "4918",
        "name": "491867",
        "label": "NAODANGA"
      },
      {
        "myfilter": "4918",
        "name": "491840",
        "label": "PHULBARI"
      },
      {
        "myfilter": "4918",
        "name": "491881",
        "label": "SHIMULBARI"
      },
      {
        "myfilter": "4977",
        "name": "497710",
        "label": "BIDYANANDA"
      },
      {
        "myfilter": "4977",
        "name": "497721",
        "label": "CHAKIRPASHAR"
      },
      {
        "myfilter": "4977",
        "name": "497731",
        "label": "CHHINAI"
      },
      {
        "myfilter": "4977",
        "name": "497742",
        "label": "GHARIALDANGA"
      },
      {
        "myfilter": "4977",
        "name": "497752",
        "label": "NAZIMKHAN"
      },
      {
        "myfilter": "4977",
        "name": "497784",
        "label": "OMAR MAJID"
      },
      {
        "myfilter": "4977",
        "name": "497773",
        "label": "RAJARHAT"
      },
      {
        "myfilter": "4979",
        "name": "497911",
        "label": "BANDABER"
      },
      {
        "myfilter": "4979",
        "name": "497923",
        "label": "DANTBHANGA"
      },
      {
        "myfilter": "4979",
        "name": "497935",
        "label": "JADUR CHAR"
      },
      {
        "myfilter": "4979",
        "name": "497971",
        "label": "RAUMARI"
      },
      {
        "myfilter": "4979",
        "name": "497983",
        "label": "SAULMARI"
      },
      {
        "myfilter": "4994",
        "name": "499416",
        "label": "BAZRA"
      },
      {
        "myfilter": "4994",
        "name": "499414",
        "label": "BEGUMGANJ"
      },
      {
        "myfilter": "4994",
        "name": "499422",
        "label": "BURABURI"
      },
      {
        "myfilter": "4994",
        "name": "499433",
        "label": "DALDALIA"
      },
      {
        "myfilter": "4994",
        "name": "499439",
        "label": "DHAMSERNI"
      },
      {
        "myfilter": "4994",
        "name": "499444",
        "label": "DHARANIBARI"
      },
      {
        "myfilter": "4994",
        "name": "499450",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "4994",
        "name": "499455",
        "label": "GUNAIGACHH"
      },
      {
        "myfilter": "4994",
        "name": "499461",
        "label": "HATIA"
      },
      {
        "myfilter": "4994",
        "name": "499472",
        "label": "PANDUL"
      },
      {
        "myfilter": "4994",
        "name": "499475",
        "label": "SAHEBER ALGA"
      },
      {
        "myfilter": "4994",
        "name": "499478",
        "label": "TABAKPUR"
      },
      {
        "myfilter": "4994",
        "name": "499483",
        "label": "THETROY"
      },
      {
        "myfilter": "5202",
        "name": "520210",
        "label": "BHADAI"
      },
      {
        "myfilter": "5202",
        "name": "520211",
        "label": "BHELABARI"
      },
      {
        "myfilter": "5202",
        "name": "520241",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "5202",
        "name": "520259",
        "label": "KAMALABARI"
      },
      {
        "myfilter": "5202",
        "name": "520271",
        "label": "MAHISHKHOCHA"
      },
      {
        "myfilter": "5202",
        "name": "520277",
        "label": "PALASHI"
      },
      {
        "myfilter": "5202",
        "name": "520283",
        "label": "SAPTIBARI"
      },
      {
        "myfilter": "5202",
        "name": "520289",
        "label": "SARPUKUR"
      },
      {
        "myfilter": "5233",
        "name": "523315",
        "label": "BARAKHATA"
      },
      {
        "myfilter": "5233",
        "name": "523319",
        "label": "BHALAGURI"
      },
      {
        "myfilter": "5233",
        "name": "523328",
        "label": "DAOABARI"
      },
      {
        "myfilter": "5233",
        "name": "523331",
        "label": "FAKIR PARA"
      },
      {
        "myfilter": "5233",
        "name": "523338",
        "label": "GODDIMARI"
      },
      {
        "myfilter": "5233",
        "name": "523347",
        "label": "GOTAMARI"
      },
      {
        "myfilter": "5233",
        "name": "523357",
        "label": "NOWDABASH"
      },
      {
        "myfilter": "5233",
        "name": "523366",
        "label": "PATIKA PARA"
      },
      {
        "myfilter": "5233",
        "name": "523374",
        "label": "SANIAJAN"
      },
      {
        "myfilter": "5233",
        "name": "523376",
        "label": "SHINGIMARI"
      },
      {
        "myfilter": "5233",
        "name": "523385",
        "label": "SINDURNA"
      },
      {
        "myfilter": "5233",
        "name": "523395",
        "label": "TANGBHANGA"
      },
      {
        "myfilter": "5239",
        "name": "523917",
        "label": "BHOTEMARI"
      },
      {
        "myfilter": "5239",
        "name": "523923",
        "label": "CHALBALA"
      },
      {
        "myfilter": "5239",
        "name": "523929",
        "label": "CHANDRAPUR"
      },
      {
        "myfilter": "5239",
        "name": "523935",
        "label": "DALAGRAM"
      },
      {
        "myfilter": "5239",
        "name": "523947",
        "label": "GORAL"
      },
      {
        "myfilter": "5239",
        "name": "523953",
        "label": "KAKINA"
      },
      {
        "myfilter": "5239",
        "name": "523965",
        "label": "MADATI"
      },
      {
        "myfilter": "5239",
        "name": "523995",
        "label": "TUSHBHANDAR"
      },
      {
        "myfilter": "5255",
        "name": "525520",
        "label": "BARABARI"
      },
      {
        "myfilter": "5255",
        "name": "525529",
        "label": "GOKUNDA"
      },
      {
        "myfilter": "5255",
        "name": "525536",
        "label": "HARATI"
      },
      {
        "myfilter": "5255",
        "name": "525543",
        "label": "KHUNIAGACHH"
      },
      {
        "myfilter": "5255",
        "name": "525551",
        "label": "KULAGHAT"
      },
      {
        "myfilter": "5255",
        "name": "525573",
        "label": "MAHENDRANAGAR"
      },
      {
        "myfilter": "5255",
        "name": "525565",
        "label": "MOGALHAT"
      },
      {
        "myfilter": "5255",
        "name": "525583",
        "label": "PANCHAGRAM"
      },
      {
        "myfilter": "5255",
        "name": "525594",
        "label": "RAJPUR"
      },
      {
        "myfilter": "5270",
        "name": "527013",
        "label": "BAURA"
      },
      {
        "myfilter": "5270",
        "name": "527015",
        "label": "BURIMARI"
      },
      {
        "myfilter": "5270",
        "name": "527019",
        "label": "DAHAGRAM"
      },
      {
        "myfilter": "5270",
        "name": "527027",
        "label": "JAGATBER"
      },
      {
        "myfilter": "5270",
        "name": "527040",
        "label": "JONGRA"
      },
      {
        "myfilter": "5270",
        "name": "527054",
        "label": "KUCHLIBARI"
      },
      {
        "myfilter": "5270",
        "name": "527067",
        "label": "PATGRAM"
      },
      {
        "myfilter": "5270",
        "name": "527081",
        "label": "SREERAMPUR"
      },
      {
        "myfilter": "7312",
        "name": "731213",
        "label": "BALA PARA"
      },
      {
        "myfilter": "7312",
        "name": "731219",
        "label": "DIMLA"
      },
      {
        "myfilter": "7312",
        "name": "731228",
        "label": "GAYABARI"
      },
      {
        "myfilter": "7312",
        "name": "731238",
        "label": "JHUNAGACHH CHAPANI"
      },
      {
        "myfilter": "7312",
        "name": "731247",
        "label": "KHALISA CHAPANI"
      },
      {
        "myfilter": "7312",
        "name": "731257",
        "label": "KHOGA KHARIBARI"
      },
      {
        "myfilter": "7312",
        "name": "731266",
        "label": "NAOTARA"
      },
      {
        "myfilter": "7312",
        "name": "731276",
        "label": "PASCHIM CHHATNAI"
      },
      {
        "myfilter": "7312",
        "name": "731285",
        "label": "PURBA CHHATNAI"
      },
      {
        "myfilter": "7312",
        "name": "731295",
        "label": "TEPA KHARIBARI"
      },
      {
        "myfilter": "7315",
        "name": "731517",
        "label": "BAMUNIA"
      },
      {
        "myfilter": "7315",
        "name": "731519",
        "label": "BHOGDABARI"
      },
      {
        "myfilter": "7315",
        "name": "731528",
        "label": "BORAGARI"
      },
      {
        "myfilter": "7315",
        "name": "731538",
        "label": "DOMAR"
      },
      {
        "myfilter": "7315",
        "name": "731547",
        "label": "GOMNATI"
      },
      {
        "myfilter": "7315",
        "name": "731557",
        "label": "HARINCHARA"
      },
      {
        "myfilter": "7315",
        "name": "731566",
        "label": "JORABARI"
      },
      {
        "myfilter": "7315",
        "name": "731576",
        "label": "KETKIBARI"
      },
      {
        "myfilter": "7315",
        "name": "731585",
        "label": "PANGA MATUKPUR"
      },
      {
        "myfilter": "7315",
        "name": "731595",
        "label": "SONAROY"
      },
      {
        "myfilter": "7336",
        "name": "733613",
        "label": "BALAGRAM"
      },
      {
        "myfilter": "7336",
        "name": "733614",
        "label": "DAOABARI"
      },
      {
        "myfilter": "7336",
        "name": "733621",
        "label": "DHARMAPAL"
      },
      {
        "myfilter": "7336",
        "name": "733629",
        "label": "GOLMUNDA"
      },
      {
        "myfilter": "7336",
        "name": "733636",
        "label": "GOLNA"
      },
      {
        "myfilter": "7336",
        "name": "733651",
        "label": "KAIMARI"
      },
      {
        "myfilter": "7336",
        "name": "733658",
        "label": "KANTHALI"
      },
      {
        "myfilter": "7336",
        "name": "733665",
        "label": "KHUTAMARA"
      },
      {
        "myfilter": "7336",
        "name": "733680",
        "label": "MIRGANJ"
      },
      {
        "myfilter": "7336",
        "name": "733694",
        "label": "SAULMARI"
      },
      {
        "myfilter": "7336",
        "name": "733687",
        "label": "SHIMULBARI"
      },
      {
        "myfilter": "7345",
        "name": "734517",
        "label": "BAHAGILI"
      },
      {
        "myfilter": "7345",
        "name": "734525",
        "label": "BARABHITA"
      },
      {
        "myfilter": "7345",
        "name": "734534",
        "label": "CHANDKHANA"
      },
      {
        "myfilter": "7345",
        "name": "734543",
        "label": "GARAGRAM"
      },
      {
        "myfilter": "7345",
        "name": "734551",
        "label": "KISHOREGANJ"
      },
      {
        "myfilter": "7345",
        "name": "734560",
        "label": "MAGURA"
      },
      {
        "myfilter": "7345",
        "name": "734569",
        "label": "NITAI"
      },
      {
        "myfilter": "7345",
        "name": "734586",
        "label": "PUTIMARI"
      },
      {
        "myfilter": "7345",
        "name": "734594",
        "label": "RANACHANDI"
      },
      {
        "myfilter": "7364",
        "name": "736418",
        "label": "CHAORA BARGACHHA"
      },
      {
        "myfilter": "7364",
        "name": "736411",
        "label": "CHAPRA SARAMJANI"
      },
      {
        "myfilter": "7364",
        "name": "736412",
        "label": "CHARAIKHOLA"
      },
      {
        "myfilter": "7364",
        "name": "736425",
        "label": "GORGRAM"
      },
      {
        "myfilter": "7364",
        "name": "736431",
        "label": "ITAKHOLA"
      },
      {
        "myfilter": "7364",
        "name": "736437",
        "label": "KACHUKATA"
      },
      {
        "myfilter": "7364",
        "name": "736444",
        "label": "KHOKSHABARI"
      },
      {
        "myfilter": "7364",
        "name": "736450",
        "label": "KUNDA PUKUR"
      },
      {
        "myfilter": "7364",
        "name": "736473",
        "label": "LAKSHMI CHAP"
      },
      {
        "myfilter": "7364",
        "name": "736469",
        "label": "PALASHBARI"
      },
      {
        "myfilter": "7364",
        "name": "736463",
        "label": "PANCH PUKUR"
      },
      {
        "myfilter": "7364",
        "name": "736475",
        "label": "RAMNAGAR"
      },
      {
        "myfilter": "7364",
        "name": "736482",
        "label": "SANGALSHI"
      },
      {
        "myfilter": "7364",
        "name": "736488",
        "label": "SONAROY"
      },
      {
        "myfilter": "7364",
        "name": "736494",
        "label": "TUPAMARI"
      },
      {
        "myfilter": "7385",
        "name": "738523",
        "label": "BANGALIPUR"
      },
      {
        "myfilter": "7385",
        "name": "738527",
        "label": "BOTHLAGARI"
      },
      {
        "myfilter": "7385",
        "name": "738598",
        "label": "CANTONMENT"
      },
      {
        "myfilter": "7385",
        "name": "738540",
        "label": "KAMAR PUKUR"
      },
      {
        "myfilter": "7385",
        "name": "738554",
        "label": "KHATA MADHUPUR"
      },
      {
        "myfilter": "7385",
        "name": "738567",
        "label": "KUSHIRAM BELPUKUR"
      },
      {
        "myfilter": "7704",
        "name": "770413",
        "label": "ALOWA KHOWA"
      },
      {
        "myfilter": "7704",
        "name": "770427",
        "label": "BALARAMPUR"
      },
      {
        "myfilter": "7704",
        "name": "770440",
        "label": "DHAMOR"
      },
      {
        "myfilter": "7704",
        "name": "770454",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "7704",
        "name": "770467",
        "label": "RADHANAGAR"
      },
      {
        "myfilter": "7704",
        "name": "770481",
        "label": "TARIA"
      },
      {
        "myfilter": "7725",
        "name": "772514",
        "label": "BANAGRAM"
      },
      {
        "myfilter": "7725",
        "name": "772512",
        "label": "BARA SHASHI"
      },
      {
        "myfilter": "7725",
        "name": "772521",
        "label": "BODA"
      },
      {
        "myfilter": "7725",
        "name": "772529",
        "label": "CHANDANBARI"
      },
      {
        "myfilter": "7725",
        "name": "772551",
        "label": "JHALAISHALSIRI"
      },
      {
        "myfilter": "7725",
        "name": "772558",
        "label": "KAJAL DIGHI KALIGANJ"
      },
      {
        "myfilter": "7725",
        "name": "772573",
        "label": "MAIDAN DIGHI"
      },
      {
        "myfilter": "7725",
        "name": "772580",
        "label": "MAREA BAMANHAT"
      },
      {
        "myfilter": "7725",
        "name": "772587",
        "label": "PANCHPIR"
      },
      {
        "myfilter": "7725",
        "name": "772594",
        "label": "SAKOA"
      },
      {
        "myfilter": "7734",
        "name": "773419",
        "label": "CHILAHATI"
      },
      {
        "myfilter": "7734",
        "name": "773428",
        "label": "DANDAPAL"
      },
      {
        "myfilter": "7734",
        "name": "773438",
        "label": "DEBIDOBA"
      },
      {
        "myfilter": "7734",
        "name": "773447",
        "label": "DEBIGANJ"
      },
      {
        "myfilter": "7734",
        "name": "773453",
        "label": "HAZRADANGA"
      },
      {
        "myfilter": "7734",
        "name": "773476",
        "label": "MALLIKADAHA"
      },
      {
        "myfilter": "7734",
        "name": "773457",
        "label": "PAMULI"
      },
      {
        "myfilter": "7734",
        "name": "773466",
        "label": "SALDANGA"
      },
      {
        "myfilter": "7734",
        "name": "773485",
        "label": "SUNDAR DIGHI"
      },
      {
        "myfilter": "7734",
        "name": "773495",
        "label": "TEPRIGANJ"
      },
      {
        "myfilter": "7773",
        "name": "777311",
        "label": "AMARKHANA"
      },
      {
        "myfilter": "7773",
        "name": "777323",
        "label": "CHAKLARHAT"
      },
      {
        "myfilter": "7773",
        "name": "777336",
        "label": "DHAKKAMARA"
      },
      {
        "myfilter": "7773",
        "name": "777343",
        "label": "GARINABARI"
      },
      {
        "myfilter": "7773",
        "name": "777335",
        "label": "HAFIZABAD"
      },
      {
        "myfilter": "7773",
        "name": "777347",
        "label": "HARIBHASA"
      },
      {
        "myfilter": "7773",
        "name": "777359",
        "label": "KAMAT KAJAL DIGHI"
      },
      {
        "myfilter": "7773",
        "name": "777365",
        "label": "MAGURA"
      },
      {
        "myfilter": "7773",
        "name": "777371",
        "label": "PANCHAGARH"
      },
      {
        "myfilter": "7773",
        "name": "777383",
        "label": "SATMARA"
      },
      {
        "myfilter": "7790",
        "name": "779013",
        "label": "BANGLABANDHA"
      },
      {
        "myfilter": "7790",
        "name": "779027",
        "label": "BHOJANPUR"
      },
      {
        "myfilter": "7790",
        "name": "779054",
        "label": "BURABURI"
      },
      {
        "myfilter": "7790",
        "name": "779040",
        "label": "DEBNAGAR"
      },
      {
        "myfilter": "7790",
        "name": "779067",
        "label": "SALBAHAN"
      },
      {
        "myfilter": "7790",
        "name": "779081",
        "label": "TENTULIA"
      },
      {
        "myfilter": "7790",
        "name": "779094",
        "label": "TIMAIHAT"
      },
      {
        "myfilter": "8503",
        "name": "850318",
        "label": "BISHNUPUR"
      },
      {
        "myfilter": "8503",
        "name": "850325",
        "label": "DAMODARPUR"
      },
      {
        "myfilter": "8503",
        "name": "850331",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "8503",
        "name": "850337",
        "label": "GOPINATHPUR"
      },
      {
        "myfilter": "8503",
        "name": "850316",
        "label": "KALU PARA"
      },
      {
        "myfilter": "8503",
        "name": "850363",
        "label": "KUTUBPUR"
      },
      {
        "myfilter": "8503",
        "name": "850369",
        "label": "LOHANI PARA"
      },
      {
        "myfilter": "8503",
        "name": "850375",
        "label": "MADHUPUR"
      },
      {
        "myfilter": "8503",
        "name": "850382",
        "label": "RADHANAGAR"
      },
      {
        "myfilter": "8503",
        "name": "850388",
        "label": "RAMNATHPUR"
      },
      {
        "myfilter": "8527",
        "name": "852716",
        "label": "ALAM BIDITAR"
      },
      {
        "myfilter": "8527",
        "name": "852719",
        "label": "BARABIL"
      },
      {
        "myfilter": "8527",
        "name": "852721",
        "label": "BETGARI"
      },
      {
        "myfilter": "8527",
        "name": "852742",
        "label": "GAJAGHANTA"
      },
      {
        "myfilter": "8527",
        "name": "852731",
        "label": "GANGACHARA"
      },
      {
        "myfilter": "8527",
        "name": "852752",
        "label": "KHALEYA"
      },
      {
        "myfilter": "8527",
        "name": "852763",
        "label": "KOLKANDA"
      },
      {
        "myfilter": "8527",
        "name": "852773",
        "label": "LAKSHMITARI"
      },
      {
        "myfilter": "8527",
        "name": "852784",
        "label": "MARANIA"
      },
      {
        "myfilter": "8527",
        "name": "852777",
        "label": "NOHALI"
      },
      {
        "myfilter": "8542",
        "name": "854223",
        "label": "HARAGACHH"
      },
      {
        "myfilter": "8542",
        "name": "854227",
        "label": "KAUNIA BALA PARA"
      },
      {
        "myfilter": "8542",
        "name": "854240",
        "label": "KURSHA"
      },
      {
        "myfilter": "8542",
        "name": "854254",
        "label": "SARAI"
      },
      {
        "myfilter": "8542",
        "name": "854267",
        "label": "SHAHIDBAGH"
      },
      {
        "myfilter": "8542",
        "name": "854281",
        "label": "TEPA MADHUPUR"
      },
      {
        "myfilter": "8558",
        "name": "855832",
        "label": "BALARHAT"
      },
      {
        "myfilter": "8558",
        "name": "855817",
        "label": "BALUA MASIMPUR"
      },
      {
        "myfilter": "8558",
        "name": "855826",
        "label": "BARA HAZRATPUR"
      },
      {
        "myfilter": "8558",
        "name": "855821",
        "label": "BARABALA"
      },
      {
        "myfilter": "8558",
        "name": "855837",
        "label": "BHANGNI"
      },
      {
        "myfilter": "8558",
        "name": "855843",
        "label": "CHENGMARI"
      },
      {
        "myfilter": "8558",
        "name": "855849",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "8558",
        "name": "855854",
        "label": "EMADPUR"
      },
      {
        "myfilter": "8558",
        "name": "855860",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "8558",
        "name": "855862",
        "label": "KAFRIKHAL"
      },
      {
        "myfilter": "8558",
        "name": "855865",
        "label": "KHORAGACHH"
      },
      {
        "myfilter": "8558",
        "name": "855867",
        "label": "LATIFPUR"
      },
      {
        "myfilter": "8558",
        "name": "855883",
        "label": "MAYENPUR"
      },
      {
        "myfilter": "8558",
        "name": "855872",
        "label": "MILANPUR"
      },
      {
        "myfilter": "8558",
        "name": "855878",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "8558",
        "name": "855889",
        "label": "PAIRABAND"
      },
      {
        "myfilter": "8558",
        "name": "855894",
        "label": "RANI PUKUR"
      },
      {
        "myfilter": "8573",
        "name": "857317",
        "label": "ANNADANAGAR"
      },
      {
        "myfilter": "8573",
        "name": "857319",
        "label": "CHHAOLA"
      },
      {
        "myfilter": "8573",
        "name": "857328",
        "label": "ITAKUMARI"
      },
      {
        "myfilter": "8573",
        "name": "857338",
        "label": "KAIKURI"
      },
      {
        "myfilter": "8573",
        "name": "857347",
        "label": "KALYANI"
      },
      {
        "myfilter": "8573",
        "name": "857357",
        "label": "KANDI"
      },
      {
        "myfilter": "8573",
        "name": "857366",
        "label": "PARUL"
      },
      {
        "myfilter": "8573",
        "name": "857376",
        "label": "PIRGACHHA"
      },
      {
        "myfilter": "8573",
        "name": "857385",
        "label": "TAMBULPUR"
      },
      {
        "myfilter": "8576",
        "name": "857616",
        "label": "BARA ALAMPUR"
      },
      {
        "myfilter": "8576",
        "name": "857622",
        "label": "BARA DARGAH"
      },
      {
        "myfilter": "8576",
        "name": "857628",
        "label": "BHENDABARI"
      },
      {
        "myfilter": "8576",
        "name": "857635",
        "label": "CHAITRAKUL"
      },
      {
        "myfilter": "8576",
        "name": "857641",
        "label": "CHATRA"
      },
      {
        "myfilter": "8576",
        "name": "857647",
        "label": "KABILPUR"
      },
      {
        "myfilter": "8576",
        "name": "857654",
        "label": "KUMEDPUR"
      },
      {
        "myfilter": "8576",
        "name": "857656",
        "label": "MADANKHALI"
      },
      {
        "myfilter": "8576",
        "name": "857658",
        "label": "MITHAPUR"
      },
      {
        "myfilter": "8576",
        "name": "857663",
        "label": "PANCHGACHHA"
      },
      {
        "myfilter": "8576",
        "name": "857669",
        "label": "PIRGANJ"
      },
      {
        "myfilter": "8576",
        "name": "857682",
        "label": "RAMNATHPUR"
      },
      {
        "myfilter": "8576",
        "name": "857675",
        "label": "ROYPUR"
      },
      {
        "myfilter": "8576",
        "name": "857688",
        "label": "SHANERHAT"
      },
      {
        "myfilter": "8576",
        "name": "857695",
        "label": "TUKURIA"
      },
      {
        "myfilter": "8549",
        "name": "854998",
        "label": "CANTONMENT"
      },
      {
        "myfilter": "8549",
        "name": "854917",
        "label": "CHANDANPAT"
      },
      {
        "myfilter": "8549",
        "name": "854919",
        "label": "DARSHANA"
      },
      {
        "myfilter": "8549",
        "name": "854923",
        "label": "HARIDEBPUR"
      },
      {
        "myfilter": "8549",
        "name": "854931",
        "label": "MOMINPUR"
      },
      {
        "myfilter": "8549",
        "name": "854939",
        "label": "PASHURAM"
      },
      {
        "myfilter": "8549",
        "name": "854947",
        "label": "RAJENDRAPUR"
      },
      {
        "myfilter": "8549",
        "name": "854963",
        "label": "SADYA PUSHKARNI"
      },
      {
        "myfilter": "8549",
        "name": "854971",
        "label": "SATGARA"
      },
      {
        "myfilter": "8549",
        "name": "854979",
        "label": "TAMPHAT"
      },
      {
        "myfilter": "8549",
        "name": "854987",
        "label": "TAPODHAN"
      },
      {
        "myfilter": "8549",
        "name": "854994",
        "label": "UTTAM"
      },
      {
        "myfilter": "8592",
        "name": "859225",
        "label": "ALAMPUR"
      },
      {
        "myfilter": "8592",
        "name": "859247",
        "label": "EKARCHALI"
      },
      {
        "myfilter": "8592",
        "name": "859263",
        "label": "HARIARKUTI"
      },
      {
        "myfilter": "8592",
        "name": "859271",
        "label": "KURSHA"
      },
      {
        "myfilter": "8592",
        "name": "859279",
        "label": "SAYAR"
      },
      {
        "myfilter": "9408",
        "name": "940810",
        "label": "AMJANKHORE"
      },
      {
        "myfilter": "9408",
        "name": "940831",
        "label": "BARA PALASHBARI"
      },
      {
        "myfilter": "9408",
        "name": "940821",
        "label": "BARABARI"
      },
      {
        "myfilter": "9408",
        "name": "940842",
        "label": "BHANOR"
      },
      {
        "myfilter": "9408",
        "name": "940852",
        "label": "CHAROL"
      },
      {
        "myfilter": "9408",
        "name": "940863",
        "label": "DHANTALA"
      },
      {
        "myfilter": "9408",
        "name": "940873",
        "label": "DUOSUO"
      },
      {
        "myfilter": "9408",
        "name": "940884",
        "label": "PARIA"
      },
      {
        "myfilter": "9451",
        "name": "945113",
        "label": "AMGAON"
      },
      {
        "myfilter": "9451",
        "name": "945127",
        "label": "BAKUA"
      },
      {
        "myfilter": "9451",
        "name": "945140",
        "label": "BHATURIA"
      },
      {
        "myfilter": "9451",
        "name": "945154",
        "label": "DANGI PARA"
      },
      {
        "myfilter": "9451",
        "name": "945167",
        "label": "GEDURA"
      },
      {
        "myfilter": "9451",
        "name": "945181",
        "label": "HARIPUR"
      },
      {
        "myfilter": "9482",
        "name": "948223",
        "label": "BAIRCHUNA"
      },
      {
        "myfilter": "9482",
        "name": "948225",
        "label": "BHOMRADAHA"
      },
      {
        "myfilter": "9482",
        "name": "948234",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "9482",
        "name": "948243",
        "label": "HAJIPUR"
      },
      {
        "myfilter": "9482",
        "name": "948251",
        "label": "JABARHAT"
      },
      {
        "myfilter": "9482",
        "name": "948260",
        "label": "KHANGAON"
      },
      {
        "myfilter": "9482",
        "name": "948269",
        "label": "KUSHA RANIGANJ"
      },
      {
        "myfilter": "9482",
        "name": "948277",
        "label": "PIRGANJ"
      },
      {
        "myfilter": "9482",
        "name": "948286",
        "label": "SAIDPUR"
      },
      {
        "myfilter": "9482",
        "name": "948294",
        "label": "SENGAON"
      },
      {
        "myfilter": "9486",
        "name": "948615",
        "label": "BACHOR"
      },
      {
        "myfilter": "9486",
        "name": "948631",
        "label": "DHARMAGARH"
      },
      {
        "myfilter": "9486",
        "name": "948647",
        "label": "HOSSAIN GAON"
      },
      {
        "myfilter": "9486",
        "name": "948655",
        "label": "KASHIPUR"
      },
      {
        "myfilter": "9486",
        "name": "948663",
        "label": "LEHEMBA"
      },
      {
        "myfilter": "9486",
        "name": "948679",
        "label": "NEKMARAD"
      },
      {
        "myfilter": "9486",
        "name": "948671",
        "label": "NONDUAR"
      },
      {
        "myfilter": "9486",
        "name": "948687",
        "label": "RATOR"
      },
      {
        "myfilter": "9494",
        "name": "949486",
        "label": "RUHEA PASCHIM"
      },
      {
        "myfilter": "9494",
        "name": "949414",
        "label": "AKCHA"
      },
      {
        "myfilter": "9494",
        "name": "949413",
        "label": "AKHANAGAR"
      },
      {
        "myfilter": "9494",
        "name": "949415",
        "label": "AULIAPUR"
      },
      {
        "myfilter": "9494",
        "name": "949421",
        "label": "BALIA"
      },
      {
        "myfilter": "9494",
        "name": "949426",
        "label": "BARAGAON"
      },
      {
        "myfilter": "9494",
        "name": "949417",
        "label": "BEGUNBARI"
      },
      {
        "myfilter": "9494",
        "name": "949431",
        "label": "CHILARANG"
      },
      {
        "myfilter": "9494",
        "name": "949436",
        "label": "DEBIPUR"
      },
      {
        "myfilter": "9494",
        "name": "949439",
        "label": "DHOLARHAT"
      },
      {
        "myfilter": "9494",
        "name": "949442",
        "label": "GAREYA"
      },
      {
        "myfilter": "9494",
        "name": "949447",
        "label": "JAGANNATHPUR"
      },
      {
        "myfilter": "9494",
        "name": "949452",
        "label": "JAMALPUR"
      },
      {
        "myfilter": "9494",
        "name": "949458",
        "label": "MOHAMMADPUR"
      },
      {
        "myfilter": "9494",
        "name": "949463",
        "label": "NARGUN"
      },
      {
        "myfilter": "9494",
        "name": "949468",
        "label": "RAHIMANPUR"
      },
      {
        "myfilter": "9494",
        "name": "949479",
        "label": "RAJAGAON"
      },
      {
        "myfilter": "9494",
        "name": "949473",
        "label": "ROYPUR"
      },
      {
        "myfilter": "9494",
        "name": "949484",
        "label": "RUHEA"
      },
      {
        "myfilter": "9494",
        "name": "949489",
        "label": "SALANDAR"
      },
      {
        "myfilter": "9494",
        "name": "949494",
        "label": "SUKHANPUKHARI"
      },
      {
        "myfilter": "3602",
        "name": "360213",
        "label": "AJMIRIGANJ"
      },
      {
        "myfilter": "3602",
        "name": "360227",
        "label": "BADALPUR"
      },
      {
        "myfilter": "3602",
        "name": "360254",
        "label": "JALSUKA"
      },
      {
        "myfilter": "3602",
        "name": "360267",
        "label": "KAKAILSEO"
      },
      {
        "myfilter": "3602",
        "name": "360281",
        "label": "SHIBPASHA"
      },
      {
        "myfilter": "3605",
        "name": "360511",
        "label": "BAHUBAL"
      },
      {
        "myfilter": "3605",
        "name": "360523",
        "label": "BHADESHWAR"
      },
      {
        "myfilter": "3605",
        "name": "360535",
        "label": "LAMATASHI"
      },
      {
        "myfilter": "3605",
        "name": "360547",
        "label": "MIRPUR"
      },
      {
        "myfilter": "3605",
        "name": "360559",
        "label": "PUTIJURI"
      },
      {
        "myfilter": "3605",
        "name": "360571",
        "label": "SATKAPAN"
      },
      {
        "myfilter": "3605",
        "name": "360583",
        "label": "SNANGHAT"
      },
      {
        "myfilter": "3611",
        "name": "361131",
        "label": "BARAIURI"
      },
      {
        "myfilter": "3611",
        "name": "361125",
        "label": "DAKSHIN PASCHIM BANIYACHANG"
      },
      {
        "myfilter": "3611",
        "name": "361118",
        "label": "DAKSHIN PURBA BANIYACHANG"
      },
      {
        "myfilter": "3611",
        "name": "361137",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "3611",
        "name": "361144",
        "label": "KAGAPASHA"
      },
      {
        "myfilter": "3611",
        "name": "361150",
        "label": "KHAGAURA"
      },
      {
        "myfilter": "3611",
        "name": "361156",
        "label": "MAKRAMPUR"
      },
      {
        "myfilter": "3611",
        "name": "361163",
        "label": "MANDARI"
      },
      {
        "myfilter": "3611",
        "name": "361169",
        "label": "MURADPUR"
      },
      {
        "myfilter": "3611",
        "name": "361175",
        "label": "PAILARKANDI"
      },
      {
        "myfilter": "3611",
        "name": "361182",
        "label": "PUKHRA"
      },
      {
        "myfilter": "3611",
        "name": "361194",
        "label": "SUBIDPUR"
      },
      {
        "myfilter": "3611",
        "name": "361188",
        "label": "SUJATPUR"
      },
      {
        "myfilter": "3611",
        "name": "361112",
        "label": "UTTAR PASCHIM BANIYACHANG"
      },
      {
        "myfilter": "3611",
        "name": "361111",
        "label": "UTTAR PURBA BANIACHANG"
      },
      {
        "myfilter": "3626",
        "name": "362613",
        "label": "AHMADABAD"
      },
      {
        "myfilter": "3626",
        "name": "362619",
        "label": "CHUNARUGHAT"
      },
      {
        "myfilter": "3626",
        "name": "362628",
        "label": "DEORGACHH"
      },
      {
        "myfilter": "3626",
        "name": "362638",
        "label": "GAZIPUR"
      },
      {
        "myfilter": "3626",
        "name": "362647",
        "label": "MIRAHI"
      },
      {
        "myfilter": "3626",
        "name": "362657",
        "label": "PAIK PARA"
      },
      {
        "myfilter": "3626",
        "name": "362666",
        "label": "RANIGAON"
      },
      {
        "myfilter": "3626",
        "name": "362676",
        "label": "SANKHOLA"
      },
      {
        "myfilter": "3626",
        "name": "362685",
        "label": "SHATIAJURI"
      },
      {
        "myfilter": "3626",
        "name": "362695",
        "label": "UBAHATA"
      },
      {
        "myfilter": "3644",
        "name": "364422",
        "label": "GOPAYA"
      },
      {
        "myfilter": "3644",
        "name": "364424",
        "label": "LASKARPUR"
      },
      {
        "myfilter": "3644",
        "name": "364428",
        "label": "LUKHRA"
      },
      {
        "myfilter": "3644",
        "name": "364438",
        "label": "NIZAMPUR"
      },
      {
        "myfilter": "3644",
        "name": "364447",
        "label": "NURPUR"
      },
      {
        "myfilter": "3644",
        "name": "364457",
        "label": "POIL"
      },
      {
        "myfilter": "3644",
        "name": "364466",
        "label": "RAZIURA"
      },
      {
        "myfilter": "3644",
        "name": "364476",
        "label": "RICHI"
      },
      {
        "myfilter": "3644",
        "name": "364485",
        "label": "SAISTAGANJ"
      },
      {
        "myfilter": "3644",
        "name": "364495",
        "label": "TEGHARIA"
      },
      {
        "myfilter": "3668",
        "name": "366813",
        "label": "BAMAI"
      },
      {
        "myfilter": "3668",
        "name": "366827",
        "label": "BULLA"
      },
      {
        "myfilter": "3668",
        "name": "366840",
        "label": "KARAB"
      },
      {
        "myfilter": "3668",
        "name": "366854",
        "label": "LAKHAI"
      },
      {
        "myfilter": "3668",
        "name": "366867",
        "label": "MURAKARI"
      },
      {
        "myfilter": "3668",
        "name": "366881",
        "label": "MURIAUK"
      },
      {
        "myfilter": "3671",
        "name": "367169",
        "label": "0AGADISHPUR"
      },
      {
        "myfilter": "3671",
        "name": "367116",
        "label": "ADAIR"
      },
      {
        "myfilter": "3671",
        "name": "367177",
        "label": "ANDIURAUK"
      },
      {
        "myfilter": "3671",
        "name": "367117",
        "label": "BAGASURA"
      },
      {
        "myfilter": "3671",
        "name": "367125",
        "label": "BAHARA"
      },
      {
        "myfilter": "3671",
        "name": "367134",
        "label": "BULLA"
      },
      {
        "myfilter": "3671",
        "name": "367143",
        "label": "CHHATIAIN"
      },
      {
        "myfilter": "3671",
        "name": "367151",
        "label": "CHOWMOHANI"
      },
      {
        "myfilter": "3671",
        "name": "367160",
        "label": "DHARMAGHAR"
      },
      {
        "myfilter": "3671",
        "name": "367186",
        "label": "NOAPARA"
      },
      {
        "myfilter": "3671",
        "name": "367194",
        "label": "SHAHJAHANPUR"
      },
      {
        "myfilter": "3677",
        "name": "367713",
        "label": "AUSKANDI"
      },
      {
        "myfilter": "3677",
        "name": "367714",
        "label": "BAUSHA"
      },
      {
        "myfilter": "3677",
        "name": "367721",
        "label": "DEBPARA"
      },
      {
        "myfilter": "3677",
        "name": "367729",
        "label": "DIGHALBAK"
      },
      {
        "myfilter": "3677",
        "name": "367743",
        "label": "GAZNAPUR"
      },
      {
        "myfilter": "3677",
        "name": "367751",
        "label": "INATHGANJ"
      },
      {
        "myfilter": "3677",
        "name": "367758",
        "label": "KALAIR BANGA"
      },
      {
        "myfilter": "3677",
        "name": "367765",
        "label": "KARGAON"
      },
      {
        "myfilter": "3677",
        "name": "367773",
        "label": "KURSHI"
      },
      {
        "myfilter": "3677",
        "name": "367780",
        "label": "NABIGANJ"
      },
      {
        "myfilter": "3677",
        "name": "367787",
        "label": "PANIUNDA"
      },
      {
        "myfilter": "3677",
        "name": "367794",
        "label": "PASCHIM BARA BHAKHAIR"
      },
      {
        "myfilter": "3677",
        "name": "367790",
        "label": "PURBA BARA BAKHAIR"
      },
      {
        "myfilter": "5814",
        "name": "581413",
        "label": "BARLEKHA"
      },
      {
        "myfilter": "5814",
        "name": "581415",
        "label": "BARNI"
      },
      {
        "myfilter": "5814",
        "name": "581431",
        "label": "DAKSHIN DAKSHINBHAGH"
      },
      {
        "myfilter": "5814",
        "name": "581429",
        "label": "DAKSHIN SHAHABAJPUR"
      },
      {
        "myfilter": "5814",
        "name": "581439",
        "label": "DASHER BAZAR"
      },
      {
        "myfilter": "5814",
        "name": "581463",
        "label": "NIJ BAHADURPUR"
      },
      {
        "myfilter": "5814",
        "name": "581477",
        "label": "SUJANAGAR"
      },
      {
        "myfilter": "5814",
        "name": "581494",
        "label": "TALIMPUR"
      },
      {
        "myfilter": "5814",
        "name": "581480",
        "label": "UTTAR DAKSHINBHAG"
      },
      {
        "myfilter": "5814",
        "name": "581485",
        "label": "UTTAR SHAHABAJPUR"
      },
      {
        "myfilter": "5835",
        "name": "583523",
        "label": "FULTALA"
      },
      {
        "myfilter": "5835",
        "name": "583529",
        "label": "GOALBARI"
      },
      {
        "myfilter": "5835",
        "name": "583547",
        "label": "JAIFARNAGAR"
      },
      {
        "myfilter": "5835",
        "name": "583555",
        "label": "PASCHIM JURI"
      },
      {
        "myfilter": "5835",
        "name": "583567",
        "label": "PURBA JURI"
      },
      {
        "myfilter": "5835",
        "name": "583583",
        "label": "SAGARNAL"
      },
      {
        "myfilter": "5856",
        "name": "585617",
        "label": "ADAMPUR"
      },
      {
        "myfilter": "5856",
        "name": "585619",
        "label": "ALINAGAR"
      },
      {
        "myfilter": "5856",
        "name": "585628",
        "label": "ISLAMPUR"
      },
      {
        "myfilter": "5856",
        "name": "585638",
        "label": "KAMALGANJ"
      },
      {
        "myfilter": "5856",
        "name": "585647",
        "label": "MADHABPUR"
      },
      {
        "myfilter": "5856",
        "name": "585657",
        "label": "MUNSHI BAZAR"
      },
      {
        "myfilter": "5856",
        "name": "585666",
        "label": "PATANUSHAR"
      },
      {
        "myfilter": "5856",
        "name": "585676",
        "label": "RAHIMPUR"
      },
      {
        "myfilter": "5856",
        "name": "585685",
        "label": "SHAMSHERNAGAR"
      },
      {
        "myfilter": "5865",
        "name": "586511",
        "label": "BARAMCHAL"
      },
      {
        "myfilter": "5865",
        "name": "586513",
        "label": "BHATERA"
      },
      {
        "myfilter": "5865",
        "name": "586510",
        "label": "BHUKSHIMAIL"
      },
      {
        "myfilter": "5865",
        "name": "586517",
        "label": "BRAHMAN BAZAR"
      },
      {
        "myfilter": "5865",
        "name": "586535",
        "label": "HAJIPUR"
      },
      {
        "myfilter": "5865",
        "name": "586541",
        "label": "JOYCHANDI"
      },
      {
        "myfilter": "5865",
        "name": "586553",
        "label": "KADIRPUR"
      },
      {
        "myfilter": "5865",
        "name": "586559",
        "label": "KARMADHA"
      },
      {
        "myfilter": "5865",
        "name": "586565",
        "label": "KULAURA"
      },
      {
        "myfilter": "5865",
        "name": "586571",
        "label": "PRITHIM PASHA"
      },
      {
        "myfilter": "5865",
        "name": "586577",
        "label": "ROUTHGAON"
      },
      {
        "myfilter": "5865",
        "name": "586589",
        "label": "SHARIFPUR"
      },
      {
        "myfilter": "5865",
        "name": "586595",
        "label": "TILAGAON"
      },
      {
        "myfilter": "5874",
        "name": "587413",
        "label": "AKHAILKURA"
      },
      {
        "myfilter": "5874",
        "name": "587414",
        "label": "AMTAIL"
      },
      {
        "myfilter": "5874",
        "name": "587421",
        "label": "CHANDIGHAT"
      },
      {
        "myfilter": "5874",
        "name": "587429",
        "label": "EKATUNA"
      },
      {
        "myfilter": "5874",
        "name": "587436",
        "label": "GIASNAGAR"
      },
      {
        "myfilter": "5874",
        "name": "587443",
        "label": "KAMALPUR"
      },
      {
        "myfilter": "5874",
        "name": "587451",
        "label": "KANAKPUR"
      },
      {
        "myfilter": "5874",
        "name": "587458",
        "label": "KHALILPUR"
      },
      {
        "myfilter": "5874",
        "name": "587465",
        "label": "MANUMUKH"
      },
      {
        "myfilter": "5874",
        "name": "587480",
        "label": "MOSTAFAPUR"
      },
      {
        "myfilter": "5874",
        "name": "587487",
        "label": "NAZIRABAD"
      },
      {
        "myfilter": "5874",
        "name": "587494",
        "label": "UPPER KAGABALA"
      },
      {
        "myfilter": "5880",
        "name": "588010",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "5880",
        "name": "588021",
        "label": "KAMAR CHAK"
      },
      {
        "myfilter": "5880",
        "name": "588031",
        "label": "MANSURNAGAR"
      },
      {
        "myfilter": "5880",
        "name": "588042",
        "label": "MUNSHI BAZAR"
      },
      {
        "myfilter": "5880",
        "name": "588052",
        "label": "PANCHGAON"
      },
      {
        "myfilter": "5880",
        "name": "588063",
        "label": "RAJNAGAR"
      },
      {
        "myfilter": "5880",
        "name": "588073",
        "label": "TENGRA"
      },
      {
        "myfilter": "5880",
        "name": "588084",
        "label": "UTTARBHAG"
      },
      {
        "myfilter": "5883",
        "name": "588315",
        "label": "ASHIDRON"
      },
      {
        "myfilter": "5883",
        "name": "588319",
        "label": "BHUNABIR"
      },
      {
        "myfilter": "5883",
        "name": "588328",
        "label": "KALAPUR"
      },
      {
        "myfilter": "5883",
        "name": "588338",
        "label": "KALIGHAT"
      },
      {
        "myfilter": "5883",
        "name": "588347",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "5883",
        "name": "588357",
        "label": "RAJGHAT"
      },
      {
        "myfilter": "5883",
        "name": "588366",
        "label": "SATGOAN"
      },
      {
        "myfilter": "5883",
        "name": "588376",
        "label": "SINDURKHAN"
      },
      {
        "myfilter": "5883",
        "name": "588385",
        "label": "SREEMANGAL"
      },
      {
        "myfilter": "9018",
        "name": "901817",
        "label": "DAKSHIN BADAGHAT"
      },
      {
        "myfilter": "9018",
        "name": "901820",
        "label": "DHONPUR"
      },
      {
        "myfilter": "9018",
        "name": "901834",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "9018",
        "name": "901877",
        "label": "PALASH"
      },
      {
        "myfilter": "9018",
        "name": "901880",
        "label": "SHOLUKABAD"
      },
      {
        "myfilter": "9023",
        "name": "902311",
        "label": "BHATGAON"
      },
      {
        "myfilter": "9023",
        "name": "902314",
        "label": "CHARMOHALLA"
      },
      {
        "myfilter": "9023",
        "name": "902313",
        "label": "CHHATAK"
      },
      {
        "myfilter": "9023",
        "name": "902347",
        "label": "DAKSHIN ISLAMPUR"
      },
      {
        "myfilter": "9023",
        "name": "902342",
        "label": "DAKSHIN KHURMA"
      },
      {
        "myfilter": "9023",
        "name": "902338",
        "label": "DULAR BAZAR"
      },
      {
        "myfilter": "9023",
        "name": "902352",
        "label": "JAWAR BAZAR"
      },
      {
        "myfilter": "9023",
        "name": "902357",
        "label": "KALARUKA"
      },
      {
        "myfilter": "9023",
        "name": "902376",
        "label": "NOARAI"
      },
      {
        "myfilter": "9023",
        "name": "902385",
        "label": "SAIDERGAON"
      },
      {
        "myfilter": "9023",
        "name": "902390",
        "label": "SAILA AFZALABAD"
      },
      {
        "myfilter": "9023",
        "name": "902392",
        "label": "SING CHAPAIR"
      },
      {
        "myfilter": "9023",
        "name": "902394",
        "label": "UTTAR SURMA"
      },
      {
        "myfilter": "9027",
        "name": "902711",
        "label": "DURGAPASHA"
      },
      {
        "myfilter": "9027",
        "name": "902733",
        "label": "JOYKALAS"
      },
      {
        "myfilter": "9027",
        "name": "902789",
        "label": "PASCHIM BIRGAON"
      },
      {
        "myfilter": "9027",
        "name": "902790",
        "label": "PASCHIM PAGLA"
      },
      {
        "myfilter": "9027",
        "name": "902761",
        "label": "PATHARIA"
      },
      {
        "myfilter": "9027",
        "name": "902792",
        "label": "PURBA BIRGOAN"
      },
      {
        "myfilter": "9027",
        "name": "902794",
        "label": "PURBA PAGLA"
      },
      {
        "myfilter": "9027",
        "name": "902778",
        "label": "SHIMULBAK"
      },
      {
        "myfilter": "9029",
        "name": "902917",
        "label": "BHATI PARA"
      },
      {
        "myfilter": "9029",
        "name": "902919",
        "label": "CHARNAR CHAR"
      },
      {
        "myfilter": "9029",
        "name": "902928",
        "label": "DERAI SARMANGAL"
      },
      {
        "myfilter": "9029",
        "name": "902938",
        "label": "JAGADDAL"
      },
      {
        "myfilter": "9029",
        "name": "902947",
        "label": "KARIMPUR"
      },
      {
        "myfilter": "9029",
        "name": "902957",
        "label": "KULANJ"
      },
      {
        "myfilter": "9029",
        "name": "902966",
        "label": "RAFINAGAR"
      },
      {
        "myfilter": "9029",
        "name": "902976",
        "label": "RAJANAGAR"
      },
      {
        "myfilter": "9029",
        "name": "902985",
        "label": "TARAL"
      },
      {
        "myfilter": "9032",
        "name": "903223",
        "label": "CHAMARDANI"
      },
      {
        "myfilter": "9032",
        "name": "903235",
        "label": "DAKSHIN BONGSHIKUNDA"
      },
      {
        "myfilter": "9032",
        "name": "903221",
        "label": "DAKSHIN SUKHAIRRAJAPUR"
      },
      {
        "myfilter": "9032",
        "name": "903238",
        "label": "DHARMAPASHA"
      },
      {
        "myfilter": "9032",
        "name": "903247",
        "label": "JOYSREE"
      },
      {
        "myfilter": "9032",
        "name": "903257",
        "label": "MADHYANAGAR"
      },
      {
        "myfilter": "9032",
        "name": "903266",
        "label": "PAIKURATI"
      },
      {
        "myfilter": "9032",
        "name": "903276",
        "label": "SELBORASH"
      },
      {
        "myfilter": "9032",
        "name": "903290",
        "label": "UTTAR BANGSHIKUNDA"
      },
      {
        "myfilter": "9032",
        "name": "903285",
        "label": "UTTAR SUKHAIR RAJAPUR"
      },
      {
        "myfilter": "9033",
        "name": "903386",
        "label": "BANGLA BAZAR"
      },
      {
        "myfilter": "9033",
        "name": "903321",
        "label": "BOUGLA BAZAR"
      },
      {
        "myfilter": "9033",
        "name": "903327",
        "label": "DAKSHIN DOWARABAZAR"
      },
      {
        "myfilter": "9033",
        "name": "903332",
        "label": "DUHALIA"
      },
      {
        "myfilter": "9033",
        "name": "903361",
        "label": "LAKSHMIPUR"
      },
      {
        "myfilter": "9033",
        "name": "903367",
        "label": "MANNARGAON"
      },
      {
        "myfilter": "9033",
        "name": "903392",
        "label": "NARSING PUR"
      },
      {
        "myfilter": "9033",
        "name": "903378",
        "label": "PANDERGAON"
      },
      {
        "myfilter": "9033",
        "name": "903381",
        "label": "SURMA"
      },
      {
        "myfilter": "9047",
        "name": "904717",
        "label": "ASHARKANDI"
      },
      {
        "myfilter": "9047",
        "name": "904719",
        "label": "HALDIPUR"
      },
      {
        "myfilter": "9047",
        "name": "904738",
        "label": "KALKALIA"
      },
      {
        "myfilter": "9047",
        "name": "904747",
        "label": "MIRPUR"
      },
      {
        "myfilter": "9047",
        "name": "904757",
        "label": "PAILGAON"
      },
      {
        "myfilter": "9047",
        "name": "904766",
        "label": "PATALI"
      },
      {
        "myfilter": "9047",
        "name": "904776",
        "label": "RANIGANJ"
      },
      {
        "myfilter": "9047",
        "name": "904785",
        "label": "SYED PUR"
      },
      {
        "myfilter": "9050",
        "name": "905013",
        "label": "BEHELI"
      },
      {
        "myfilter": "9050",
        "name": "905054",
        "label": "FENARBAK"
      },
      {
        "myfilter": "9050",
        "name": "905067",
        "label": "JAMALGANJ"
      },
      {
        "myfilter": "9050",
        "name": "905081",
        "label": "SACHNA BAZAR"
      },
      {
        "myfilter": "9050",
        "name": "905027",
        "label": "VIMKHALI"
      },
      {
        "myfilter": "9086",
        "name": "908623",
        "label": "ATGAON"
      },
      {
        "myfilter": "9086",
        "name": "908647",
        "label": "BAHARA"
      },
      {
        "myfilter": "9086",
        "name": "908671",
        "label": "HABIBPUR"
      },
      {
        "myfilter": "9086",
        "name": "908695",
        "label": "SULLA"
      },
      {
        "myfilter": "9089",
        "name": "908910",
        "label": "AFTABNAGAR"
      },
      {
        "myfilter": "9089",
        "name": "908927",
        "label": "GOURARARANG"
      },
      {
        "myfilter": "9089",
        "name": "908933",
        "label": "JAHANGIRNAGAR"
      },
      {
        "myfilter": "9089",
        "name": "908936",
        "label": "KATAIR"
      },
      {
        "myfilter": "9089",
        "name": "908939",
        "label": "LAKSHMANSREE"
      },
      {
        "myfilter": "9089",
        "name": "908950",
        "label": "MOHANPUR"
      },
      {
        "myfilter": "9089",
        "name": "908955",
        "label": "MOLLAH PARA"
      },
      {
        "myfilter": "9089",
        "name": "908972",
        "label": "RANGAR CHAR"
      },
      {
        "myfilter": "9089",
        "name": "908977",
        "label": "SURMA"
      },
      {
        "myfilter": "9092",
        "name": "909210",
        "label": "BALIJURI"
      },
      {
        "myfilter": "9092",
        "name": "909282",
        "label": "BARADAL"
      },
      {
        "myfilter": "9092",
        "name": "909243",
        "label": "DAKSHIN BARADAL"
      },
      {
        "myfilter": "9092",
        "name": "909233",
        "label": "DAKSHIN SREEPUR"
      },
      {
        "myfilter": "9092",
        "name": "909264",
        "label": "TAHIRPUR"
      },
      {
        "myfilter": "9092",
        "name": "909271",
        "label": "UTTAR BADAGHAT"
      },
      {
        "myfilter": "9092",
        "name": "909292",
        "label": "UTTAR SREEPUR"
      },
      {
        "myfilter": "9108",
        "name": "910811",
        "label": "BALAGANJ"
      },
      {
        "myfilter": "9108",
        "name": "910813",
        "label": "BOALJUR BAZAR"
      },
      {
        "myfilter": "9108",
        "name": "910820",
        "label": "BURUNGA"
      },
      {
        "myfilter": "9108",
        "name": "910827",
        "label": "DAYAMIR"
      },
      {
        "myfilter": "9108",
        "name": "910833",
        "label": "DEWAN BAZAR"
      },
      {
        "myfilter": "9108",
        "name": "910840",
        "label": "GOULA BAZAR"
      },
      {
        "myfilter": "9108",
        "name": "910851",
        "label": "OMARPUR"
      },
      {
        "myfilter": "9108",
        "name": "910855",
        "label": "OSMANPUR"
      },
      {
        "myfilter": "9108",
        "name": "910860",
        "label": "PASCHIM GAURIPUR"
      },
      {
        "myfilter": "9108",
        "name": "910864",
        "label": "PASCHIM PAILANPUR"
      },
      {
        "myfilter": "9108",
        "name": "910870",
        "label": "PURBA GAURIPUR"
      },
      {
        "myfilter": "9108",
        "name": "910867",
        "label": "PURBA PAILANPUR"
      },
      {
        "myfilter": "9108",
        "name": "910881",
        "label": "SADIPUR"
      },
      {
        "myfilter": "9108",
        "name": "910888",
        "label": "TAJPUR"
      },
      {
        "myfilter": "9117",
        "name": "911711",
        "label": "ALINAGAR"
      },
      {
        "myfilter": "9117",
        "name": "911725",
        "label": "CHARKHAI"
      },
      {
        "myfilter": "9117",
        "name": "911734",
        "label": "DOBHAG"
      },
      {
        "myfilter": "9117",
        "name": "911743",
        "label": "KURAR BAZAR"
      },
      {
        "myfilter": "9117",
        "name": "911751",
        "label": "LAUTA"
      },
      {
        "myfilter": "9117",
        "name": "911760",
        "label": "MATHIURA"
      },
      {
        "myfilter": "9117",
        "name": "911714",
        "label": "MOLLAHPUR"
      },
      {
        "myfilter": "9117",
        "name": "911777",
        "label": "MURIA"
      },
      {
        "myfilter": "9117",
        "name": "911786",
        "label": "SHEOLA"
      },
      {
        "myfilter": "9117",
        "name": "911794",
        "label": "TILPARA"
      },
      {
        "myfilter": "9120",
        "name": "912010",
        "label": "ALANKARI"
      },
      {
        "myfilter": "9120",
        "name": "912021",
        "label": "BISHWANATH"
      },
      {
        "myfilter": "9120",
        "name": "912052",
        "label": "DASGHAR"
      },
      {
        "myfilter": "9120",
        "name": "912031",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "9120",
        "name": "912042",
        "label": "DEOKALAS"
      },
      {
        "myfilter": "9120",
        "name": "912063",
        "label": "KHAZANCHIGAON"
      },
      {
        "myfilter": "9120",
        "name": "912073",
        "label": "LAMA KAZI"
      },
      {
        "myfilter": "9120",
        "name": "912084",
        "label": "RAMPASHA"
      },
      {
        "myfilter": "9127",
        "name": "912717",
        "label": "ISHAKALAS"
      },
      {
        "myfilter": "9127",
        "name": "912711",
        "label": "ISLAMPUR PASCHIM"
      },
      {
        "myfilter": "9127",
        "name": "912713",
        "label": "ISLAMPUR PURBA"
      },
      {
        "myfilter": "9127",
        "name": "912747",
        "label": "RANIKHAI DAKSHIN"
      },
      {
        "myfilter": "9127",
        "name": "912757",
        "label": "RANIKHAI UTTAR"
      },
      {
        "myfilter": "9127",
        "name": "912771",
        "label": "TELIKHAL"
      },
      {
        "myfilter": "9131",
        "name": "913136",
        "label": "BARAIKANDI"
      },
      {
        "myfilter": "9131",
        "name": "913130",
        "label": "DAUDPUR"
      },
      {
        "myfilter": "9131",
        "name": "913137",
        "label": "JALALPUR"
      },
      {
        "myfilter": "9131",
        "name": "913141",
        "label": "KAMAL BAZAR"
      },
      {
        "myfilter": "9131",
        "name": "913145",
        "label": "KUCHAI"
      },
      {
        "myfilter": "9131",
        "name": "913150",
        "label": "LALA BAZAR"
      },
      {
        "myfilter": "9131",
        "name": "913160",
        "label": "MOGLA BAZAR"
      },
      {
        "myfilter": "9131",
        "name": "913165",
        "label": "MOLLARGAON"
      },
      {
        "myfilter": "9131",
        "name": "913175",
        "label": "SILAM"
      },
      {
        "myfilter": "9131",
        "name": "913185",
        "label": "TETLI"
      },
      {
        "myfilter": "9135",
        "name": "913595",
        "label": "UTTAR KUSHIARA"
      },
      {
        "myfilter": "9135",
        "name": "913523",
        "label": "FENCHUGANJ"
      },
      {
        "myfilter": "9135",
        "name": "913547",
        "label": "GILACHHARA"
      },
      {
        "myfilter": "9135",
        "name": "913571",
        "label": "MAIJGAON"
      },
      {
        "myfilter": "9135",
        "name": "913593",
        "label": "UTTAR FENCHUGANJ"
      },
      {
        "myfilter": "9138",
        "name": "913813",
        "label": "AMURA"
      },
      {
        "myfilter": "9138",
        "name": "913815",
        "label": "BAGHA"
      },
      {
        "myfilter": "9138",
        "name": "913817",
        "label": "BHADESHWAR"
      },
      {
        "myfilter": "9138",
        "name": "913820",
        "label": "BUDBARI BAZAR"
      },
      {
        "myfilter": "9138",
        "name": "913825",
        "label": "DHAKA DAKSHIN"
      },
      {
        "myfilter": "9138",
        "name": "913843",
        "label": "FULBARI"
      },
      {
        "myfilter": "9138",
        "name": "913851",
        "label": "GOLAPGANJ"
      },
      {
        "myfilter": "9138",
        "name": "913869",
        "label": "LAKSHANABAND"
      },
      {
        "myfilter": "9138",
        "name": "913860",
        "label": "LAKSHMI PASHA"
      },
      {
        "myfilter": "9138",
        "name": "913836",
        "label": "SHORIFGONJ"
      },
      {
        "myfilter": "9138",
        "name": "913877",
        "label": "UTTAR BADE PASHA"
      },
      {
        "myfilter": "9141",
        "name": "914110",
        "label": "ALIRGAON"
      },
      {
        "myfilter": "9141",
        "name": "914116",
        "label": "DAUBARI"
      },
      {
        "myfilter": "9141",
        "name": "914121",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "9141",
        "name": "914152",
        "label": "LENGURA"
      },
      {
        "myfilter": "9141",
        "name": "914163",
        "label": "NANDIRGAON"
      },
      {
        "myfilter": "9141",
        "name": "914142",
        "label": "PASCHIM JAFLONG"
      },
      {
        "myfilter": "9141",
        "name": "914131",
        "label": "PURBA JAFLONG"
      },
      {
        "myfilter": "9141",
        "name": "914173",
        "label": "RUSTAMPUR"
      },
      {
        "myfilter": "9141",
        "name": "914184",
        "label": "TOWAKUL"
      },
      {
        "myfilter": "9153",
        "name": "915327",
        "label": "CHARIKATA"
      },
      {
        "myfilter": "9153",
        "name": "915329",
        "label": "CHIKNAGUL"
      },
      {
        "myfilter": "9153",
        "name": "915331",
        "label": "DARBASTA"
      },
      {
        "myfilter": "9153",
        "name": "915345",
        "label": "FATEHPUR"
      },
      {
        "myfilter": "9153",
        "name": "915352",
        "label": "JAINTAPUR"
      },
      {
        "myfilter": "9153",
        "name": "915363",
        "label": "NIJPAT"
      },
      {
        "myfilter": "9159",
        "name": "915913",
        "label": "BARA CHATUL"
      },
      {
        "myfilter": "9159",
        "name": "915919",
        "label": "DAKSHIN BANIGRAM"
      },
      {
        "myfilter": "9159",
        "name": "915938",
        "label": "JHINGRABARI"
      },
      {
        "myfilter": "9159",
        "name": "915947",
        "label": "KANAIGHAT"
      },
      {
        "myfilter": "9159",
        "name": "915966",
        "label": "PASCHIM LAKSHMIP RASAD"
      },
      {
        "myfilter": "9159",
        "name": "915976",
        "label": "PURBA DIGHIRPAR"
      },
      {
        "myfilter": "9159",
        "name": "915972",
        "label": "PURBA LAKSHMI PRASAD"
      },
      {
        "myfilter": "9159",
        "name": "915985",
        "label": "RAJAGANJ"
      },
      {
        "myfilter": "9159",
        "name": "915970",
        "label": "SATBAK (PASCHIM DIGHIRPAR)"
      },
      {
        "myfilter": "9162",
        "name": "916232",
        "label": "HATKHOLA"
      },
      {
        "myfilter": "9162",
        "name": "916234",
        "label": "JALALABAD"
      },
      {
        "myfilter": "9162",
        "name": "916238",
        "label": "KANDIGAON"
      },
      {
        "myfilter": "9162",
        "name": "916242",
        "label": "KHADIM PARA"
      },
      {
        "myfilter": "9162",
        "name": "916240",
        "label": "KHADIMNAGAR"
      },
      {
        "myfilter": "9162",
        "name": "916255",
        "label": "MOGALGAON"
      },
      {
        "myfilter": "9162",
        "name": "916298",
        "label": "SYLHET CANTONMENT"
      },
      {
        "myfilter": "9162",
        "name": "916290",
        "label": "TUKER BAZAR"
      },
      {
        "myfilter": "9162",
        "name": "916295",
        "label": "TULTIKAR"
      },
      {
        "myfilter": "9194",
        "name": "919419",
        "label": "BARA THAKURI"
      },
      {
        "myfilter": "9194",
        "name": "919415",
        "label": "BARAHAL"
      },
      {
        "myfilter": "9194",
        "name": "919428",
        "label": "BIRASREE"
      },
      {
        "myfilter": "9194",
        "name": "919447",
        "label": "KAJALSHAR"
      },
      {
        "myfilter": "9194",
        "name": "919438",
        "label": "KASHKANAKPUR"
      },
      {
        "myfilter": "9194",
        "name": "919457",
        "label": "KHOLACHHARA"
      },
      {
        "myfilter": "9194",
        "name": "919466",
        "label": "MANIKPUR"
      },
      {
        "myfilter": "9194",
        "name": "919476",
        "label": "SULTANPUR"
      },
      {
        "myfilter": "9194",
        "name": "919485",
        "label": "ZAKIGANJ"
      }
    ],
    "type_species": [
      {
        "name": "1",
        "label": "Chicken"
      },
      {
        "name": "2",
        "label": "Duck"
      },
      {
        "name": "3",
        "label": "Goose"
      },
      {
        "name": "4",
        "label": "Pigeon"
      },
      {
        "name": "5",
        "label": "Quail"
      },
      {
        "name": "6",
        "label": "Turkey"
      },
      {
        "name": "7",
        "label": "Guinea"
      }
    ],
    "source": [
      {
        "name": "1",
        "label": "Salesman"
      },
      {
        "name": "2",
        "label": "Govt"
      },
      {
        "name": "3",
        "label": "Market"
      },
      {
        "name": "4",
        "label": "Dealer"
      },
      {
        "name": "5",
        "label": "Vet"
      },
      {
        "name": "6",
        "label": "Quack"
      }
    ],
    "division": [
      {
        "name": "10",
        "label": "BARISAL"
      },
      {
        "name": "20",
        "label": "CHITTAGONG"
      },
      {
        "name": "30",
        "label": "DHAKA"
      },
      {
        "name": "40",
        "label": "KHULNA"
      },
      {
        "name": "50",
        "label": "RAJSHAHI"
      },
      {
        "name": "55",
        "label": "RANGPUR"
      },
      {
        "name": "60",
        "label": "SYLHET"
      }
    ],
    "means_verification_vaccination": [
      {
        "name": "1",
        "label": "Vaccination record"
      },
      {
        "name": "2",
        "label": "Semi-structure interview"
      }
    ],
    "farm_ownership_type": [
      {
        "name": "1",
        "label": "Corporate contract"
      },
      {
        "name": "2",
        "label": "Independent"
      },
      {
        "name": "3",
        "label": "Personal contract (dealer)"
      },
      {
        "name": "4",
        "label": "Rental"
      }
    ],
    "means_verification": [
      {
        "name": "1",
        "label": "direct observation"
      },
      {
        "name": "2",
        "label": "semi-structured interview"
      },
      {
        "name": "3",
        "label": "compared to biosecurity design plan"
      }
    ],
    "purpose": [
      {
        "name": "1",
        "label": "Infection/sick"
      },
      {
        "name": "2",
        "label": "Prevention"
      },
      {
        "name": "3",
        "label": "Faster growth/more eggs"
      }
    ],
    "type_chicken": [
      {
        "name": "1",
        "label": "Brown Comm"
      },
      {
        "name": "2",
        "label": "White Comm"
      },
      {
        "name": "3",
        "label": "Deshi (backyard)"
      },
      {
        "name": "4",
        "label": "Sonali"
      }
    ],
    "upazila": [
      {
        "myfilter": "1004",
        "name": "0409",
        "label": "AMTALI"
      },
      {
        "myfilter": "1004",
        "name": "0419",
        "label": "BAMNA"
      },
      {
        "myfilter": "1004",
        "name": "0428",
        "label": "BARGUNA SADAR"
      },
      {
        "myfilter": "1004",
        "name": "0447",
        "label": "BETAGI"
      },
      {
        "myfilter": "1004",
        "name": "0485",
        "label": "PATHARGHATA"
      },
      {
        "myfilter": "1004",
        "name": "0490",
        "label": "TALTALI"
      },
      {
        "myfilter": "1006",
        "name": "0602",
        "label": "AGAILJHARA"
      },
      {
        "myfilter": "1006",
        "name": "0603",
        "label": "BABUGANJ"
      },
      {
        "myfilter": "1006",
        "name": "0607",
        "label": "BAKERGANJ"
      },
      {
        "myfilter": "1006",
        "name": "0610",
        "label": "BANARI PARA"
      },
      {
        "myfilter": "1006",
        "name": "0651",
        "label": "BARISAL SADAR (KOTWALI)"
      },
      {
        "myfilter": "1006",
        "name": "0632",
        "label": "GAURNADI"
      },
      {
        "myfilter": "1006",
        "name": "0636",
        "label": "HIZLA"
      },
      {
        "myfilter": "1006",
        "name": "0662",
        "label": "MHENDIGANJ"
      },
      {
        "myfilter": "1006",
        "name": "0669",
        "label": "MULADI"
      },
      {
        "myfilter": "1006",
        "name": "0694",
        "label": "WAZIRPUR"
      },
      {
        "myfilter": "1009",
        "name": "0918",
        "label": "BHOLA SADAR"
      },
      {
        "myfilter": "1009",
        "name": "0921",
        "label": "BURHANUDDIN"
      },
      {
        "myfilter": "1009",
        "name": "0925",
        "label": "CHAR FASSON"
      },
      {
        "myfilter": "1009",
        "name": "0929",
        "label": "DAULAT KHAN"
      },
      {
        "myfilter": "1009",
        "name": "0954",
        "label": "LALMOHAN"
      },
      {
        "myfilter": "1009",
        "name": "0965",
        "label": "MANPURA"
      },
      {
        "myfilter": "1009",
        "name": "0991",
        "label": "TAZUMUDDIN"
      },
      {
        "myfilter": "1042",
        "name": "4240",
        "label": "JHALOKATI SADAR"
      },
      {
        "myfilter": "1042",
        "name": "4243",
        "label": "KANTHALIA"
      },
      {
        "myfilter": "1042",
        "name": "4273",
        "label": "NALCHITY"
      },
      {
        "myfilter": "1042",
        "name": "4284",
        "label": "RAJAPUR"
      },
      {
        "myfilter": "1078",
        "name": "7838",
        "label": "BAUPHAL"
      },
      {
        "myfilter": "1078",
        "name": "7852",
        "label": "DASHMINA"
      },
      {
        "myfilter": "1078",
        "name": "7855",
        "label": "DUMKI"
      },
      {
        "myfilter": "1078",
        "name": "7857",
        "label": "GALACHIPA"
      },
      {
        "myfilter": "1078",
        "name": "7866",
        "label": "KALAPARA"
      },
      {
        "myfilter": "1078",
        "name": "7876",
        "label": "MIRZAGANJ"
      },
      {
        "myfilter": "1078",
        "name": "7895",
        "label": "PATUAKHALI SADAR"
      },
      {
        "myfilter": "1078",
        "name": "7897",
        "label": "RANGABALI"
      },
      {
        "myfilter": "1079",
        "name": "7914",
        "label": "BHANDARIA"
      },
      {
        "myfilter": "1079",
        "name": "7947",
        "label": "KAWKHALI"
      },
      {
        "myfilter": "1079",
        "name": "7958",
        "label": "MATHBARIA"
      },
      {
        "myfilter": "1079",
        "name": "7976",
        "label": "NAZIRPUR"
      },
      {
        "myfilter": "1079",
        "name": "7987",
        "label": "NESARABAD (SWARUPKATI)"
      },
      {
        "myfilter": "1079",
        "name": "7980",
        "label": "PIROJPUR SADAR"
      },
      {
        "myfilter": "1079",
        "name": "7990",
        "label": "ZIANAGAR"
      },
      {
        "myfilter": "2003",
        "name": "0304",
        "label": "ALIKADAM"
      },
      {
        "myfilter": "2003",
        "name": "0314",
        "label": "BANDARBAN SADAR"
      },
      {
        "myfilter": "2003",
        "name": "0351",
        "label": "LAMA"
      },
      {
        "myfilter": "2003",
        "name": "0373",
        "label": "NAIKHONGCHHARI"
      },
      {
        "myfilter": "2003",
        "name": "0389",
        "label": "ROWANGCHHARI"
      },
      {
        "myfilter": "2003",
        "name": "0391",
        "label": "RUMA"
      },
      {
        "myfilter": "2003",
        "name": "0395",
        "label": "THANCHI"
      },
      {
        "myfilter": "2012",
        "name": "1202",
        "label": "AKHAURA"
      },
      {
        "myfilter": "2012",
        "name": "1233",
        "label": "ASHUGANJ"
      },
      {
        "myfilter": "2012",
        "name": "1204",
        "label": "BANCHHARAMPUR"
      },
      {
        "myfilter": "2012",
        "name": "1207",
        "label": "BIJOYNAGAR"
      },
      {
        "myfilter": "2012",
        "name": "1213",
        "label": "BRAHMANBARIA SADAR"
      },
      {
        "myfilter": "2012",
        "name": "1263",
        "label": "KASBA"
      },
      {
        "myfilter": "2012",
        "name": "1285",
        "label": "NABINAGAR"
      },
      {
        "myfilter": "2012",
        "name": "1290",
        "label": "NASIRNAGAR"
      },
      {
        "myfilter": "2012",
        "name": "1294",
        "label": "SARAIL"
      },
      {
        "myfilter": "2013",
        "name": "1322",
        "label": "CHANDPUR SADAR"
      },
      {
        "myfilter": "2013",
        "name": "1345",
        "label": "FARIDGANJ"
      },
      {
        "myfilter": "2013",
        "name": "1347",
        "label": "HAIM CHAR"
      },
      {
        "myfilter": "2013",
        "name": "1349",
        "label": "HAJIGANJ"
      },
      {
        "myfilter": "2013",
        "name": "1358",
        "label": "KACHUA"
      },
      {
        "myfilter": "2013",
        "name": "1376",
        "label": "MATLAB DAKSHIN"
      },
      {
        "myfilter": "2013",
        "name": "1379",
        "label": "MATLAB UTTAR"
      },
      {
        "myfilter": "2013",
        "name": "1395",
        "label": "SHAHRASTI"
      },
      {
        "myfilter": "2015",
        "name": "1504",
        "label": "ANOWARA"
      },
      {
        "myfilter": "2015",
        "name": "1508",
        "label": "BANSHKHALI"
      },
      {
        "myfilter": "2015",
        "name": "1512",
        "label": "BOALKHALI"
      },
      {
        "myfilter": "2015",
        "name": "1518",
        "label": "CHANDANAISH"
      },
      {
        "myfilter": "2015",
        "name": "1533",
        "label": "FATIKCHHARI"
      },
      {
        "myfilter": "2015",
        "name": "1537",
        "label": "HATHAZARI"
      },
      {
        "myfilter": "2015",
        "name": "1547",
        "label": "LOHAGARA"
      },
      {
        "myfilter": "2015",
        "name": "1553",
        "label": "MIRSHARAI"
      },
      {
        "myfilter": "2015",
        "name": "1539",
        "label": "Potia"
      },
      {
        "myfilter": "2015",
        "name": "1570",
        "label": "RANGUNIA"
      },
      {
        "myfilter": "2015",
        "name": "1574",
        "label": "RAOZAN"
      },
      {
        "myfilter": "2015",
        "name": "1578",
        "label": "SANDWIP"
      },
      {
        "myfilter": "2015",
        "name": "1582",
        "label": "SATKANIA"
      },
      {
        "myfilter": "2015",
        "name": "1586",
        "label": "SITAKUNDA"
      },
      {
        "myfilter": "2019",
        "name": "1909",
        "label": "BARURA"
      },
      {
        "myfilter": "2019",
        "name": "1915",
        "label": "BRAHMAN PARA"
      },
      {
        "myfilter": "2019",
        "name": "1918",
        "label": "BURICHANG"
      },
      {
        "myfilter": "2019",
        "name": "1927",
        "label": "CHANDINA"
      },
      {
        "myfilter": "2019",
        "name": "1931",
        "label": "CHAUDDAGRAM"
      },
      {
        "myfilter": "2019",
        "name": "1967",
        "label": "COMILLA ADARSHA SADAR"
      },
      {
        "myfilter": "2019",
        "name": "1933",
        "label": "COMILLA SADAR DAKSHIN"
      },
      {
        "myfilter": "2019",
        "name": "1936",
        "label": "DAUDKANDI"
      },
      {
        "myfilter": "2019",
        "name": "1940",
        "label": "DEBIDWAR"
      },
      {
        "myfilter": "2019",
        "name": "1954",
        "label": "HOMNA"
      },
      {
        "myfilter": "2019",
        "name": "1972",
        "label": "LAKSAM"
      },
      {
        "myfilter": "2019",
        "name": "1974",
        "label": "MANOHARGANJ"
      },
      {
        "myfilter": "2019",
        "name": "1975",
        "label": "MEGHNA"
      },
      {
        "myfilter": "2019",
        "name": "1981",
        "label": "MURADNAGAR"
      },
      {
        "myfilter": "2019",
        "name": "1987",
        "label": "NANGALKOT"
      },
      {
        "myfilter": "2019",
        "name": "1994",
        "label": "TITAS"
      },
      {
        "myfilter": "2022",
        "name": "2216",
        "label": "CHAKARIA"
      },
      {
        "myfilter": "2022",
        "name": "2224",
        "label": "COX'S BAZAR SADAR"
      },
      {
        "myfilter": "2022",
        "name": "2245",
        "label": "KUTUBDIA"
      },
      {
        "myfilter": "2022",
        "name": "2249",
        "label": "MAHESHKHALI"
      },
      {
        "myfilter": "2022",
        "name": "2256",
        "label": "PEKUA"
      },
      {
        "myfilter": "2022",
        "name": "2266",
        "label": "RAMU"
      },
      {
        "myfilter": "2022",
        "name": "2290",
        "label": "TEKNAF"
      },
      {
        "myfilter": "2022",
        "name": "2294",
        "label": "UKHIA"
      },
      {
        "myfilter": "2030",
        "name": "3014",
        "label": "CHHAGALNAIYA"
      },
      {
        "myfilter": "2030",
        "name": "3025",
        "label": "DAGANBHUIYAN"
      },
      {
        "myfilter": "2030",
        "name": "3029",
        "label": "FENI SADAR"
      },
      {
        "myfilter": "2030",
        "name": "3041",
        "label": "FULGAZI"
      },
      {
        "myfilter": "2030",
        "name": "3051",
        "label": "PARSHURAM"
      },
      {
        "myfilter": "2030",
        "name": "3094",
        "label": "SONAGAZI"
      },
      {
        "myfilter": "2046",
        "name": "4643",
        "label": "DIGHINALA"
      },
      {
        "myfilter": "2046",
        "name": "4649",
        "label": "KHAGRACHHARI SADAR"
      },
      {
        "myfilter": "2046",
        "name": "4661",
        "label": "LAKSHMICHHARI"
      },
      {
        "myfilter": "2046",
        "name": "4665",
        "label": "MAHALCHHARI"
      },
      {
        "myfilter": "2046",
        "name": "4667",
        "label": "MANIKCHHARI"
      },
      {
        "myfilter": "2046",
        "name": "4670",
        "label": "MATIRANGA"
      },
      {
        "myfilter": "2046",
        "name": "4677",
        "label": "PANCHHARI"
      },
      {
        "myfilter": "2046",
        "name": "4680",
        "label": "RAMGARH"
      },
      {
        "myfilter": "2051",
        "name": "5133",
        "label": "KAMALNAGAR"
      },
      {
        "myfilter": "2051",
        "name": "5143",
        "label": "LAKSHMIPUR SADAR"
      },
      {
        "myfilter": "2051",
        "name": "5165",
        "label": "RAMGANJ"
      },
      {
        "myfilter": "2051",
        "name": "5173",
        "label": "RAMGATI"
      },
      {
        "myfilter": "2051",
        "name": "5158",
        "label": "ROYPUR"
      },
      {
        "myfilter": "2075",
        "name": "7507",
        "label": "BEGUMGANJ"
      },
      {
        "myfilter": "2075",
        "name": "7510",
        "label": "CHATKHIL"
      },
      {
        "myfilter": "2075",
        "name": "7521",
        "label": "COMPANIGANJ"
      },
      {
        "myfilter": "2075",
        "name": "7536",
        "label": "HATIYA"
      },
      {
        "myfilter": "2075",
        "name": "7547",
        "label": "KABIRHAT"
      },
      {
        "myfilter": "2075",
        "name": "7587",
        "label": "NOAKHALI SADAR"
      },
      {
        "myfilter": "2075",
        "name": "7580",
        "label": "SENBAGH"
      },
      {
        "myfilter": "2075",
        "name": "7583",
        "label": "SONAIMURI"
      },
      {
        "myfilter": "2075",
        "name": "7585",
        "label": "SUBARNACHAR"
      },
      {
        "myfilter": "2084",
        "name": "8407",
        "label": "BAGHAICHHARI"
      },
      {
        "myfilter": "2084",
        "name": "8421",
        "label": "BARKAL UPAZILA"
      },
      {
        "myfilter": "2084",
        "name": "8429",
        "label": "BELAI CHHARI  UPAZI"
      },
      {
        "myfilter": "2084",
        "name": "8447",
        "label": "JURAI CHHARI UPAZIL"
      },
      {
        "myfilter": "2084",
        "name": "8436",
        "label": "KAPTAI  UPAZILA"
      },
      {
        "myfilter": "2084",
        "name": "8425",
        "label": "KAWKHALI (BETBUNIA)"
      },
      {
        "myfilter": "2084",
        "name": "8458",
        "label": "LANGADU  UPAZILA"
      },
      {
        "myfilter": "2084",
        "name": "8475",
        "label": "NANIARCHAR  UPAZILA"
      },
      {
        "myfilter": "2084",
        "name": "8478",
        "label": "RAJASTHALI  UPAZILA"
      },
      {
        "myfilter": "2084",
        "name": "8487",
        "label": "RANGAMATI SADAR  UP"
      },
      {
        "myfilter": "3026",
        "name": "2614",
        "label": "DHAMRAI"
      },
      {
        "myfilter": "3026",
        "name": "2618",
        "label": "DOHAR"
      },
      {
        "myfilter": "3026",
        "name": "2638",
        "label": "KERANIGANJ"
      },
      {
        "myfilter": "3026",
        "name": "2662",
        "label": "NAWABGANJ"
      },
      {
        "myfilter": "3026",
        "name": "2672",
        "label": "SAVAR"
      },
      {
        "myfilter": "3026",
        "name": "2604",
        "label": "Tejgaon Circle-1"
      },
      {
        "myfilter": "3026",
        "name": "2668",
        "label": "Tejgaon Circle-10"
      },
      {
        "myfilter": "3026",
        "name": "2693",
        "label": "Tejgaon Circle-11"
      },
      {
        "myfilter": "3026",
        "name": "2696",
        "label": "Tejgaon Circle-12"
      },
      {
        "myfilter": "3026",
        "name": "2606",
        "label": "Tejgaon Circle-2"
      },
      {
        "myfilter": "3026",
        "name": "2610",
        "label": "Tejgaon Circle-3"
      },
      {
        "myfilter": "3026",
        "name": "2612",
        "label": "Tejgaon Circle-4"
      },
      {
        "myfilter": "3026",
        "name": "2629",
        "label": "Tejgaon Circle-5"
      },
      {
        "myfilter": "3026",
        "name": "2632",
        "label": "Tejgaon Circle-6"
      },
      {
        "myfilter": "3026",
        "name": "2634",
        "label": "Tejgaon Circle-7"
      },
      {
        "myfilter": "3026",
        "name": "2636",
        "label": "Tejgaon Circle-8"
      },
      {
        "myfilter": "3026",
        "name": "2637",
        "label": "Tejgaon Circle-9"
      },
      {
        "myfilter": "3029",
        "name": "2903",
        "label": "ALFADANGA"
      },
      {
        "myfilter": "3029",
        "name": "2910",
        "label": "BHANGA"
      },
      {
        "myfilter": "3029",
        "name": "2918",
        "label": "BOALMARI"
      },
      {
        "myfilter": "3029",
        "name": "2921",
        "label": "CHAR BHADRASAN"
      },
      {
        "myfilter": "3029",
        "name": "2947",
        "label": "FARIDPUR SADAR"
      },
      {
        "myfilter": "3029",
        "name": "2956",
        "label": "MADHUKHALI"
      },
      {
        "myfilter": "3029",
        "name": "2962",
        "label": "NAGARKANDA"
      },
      {
        "myfilter": "3029",
        "name": "2984",
        "label": "SADARPUR"
      },
      {
        "myfilter": "3029",
        "name": "2990",
        "label": "SALTHA"
      },
      {
        "myfilter": "3033",
        "name": "3330",
        "label": "GAZIPUR SADAR"
      },
      {
        "myfilter": "3033",
        "name": "3332",
        "label": "KALIAKAIR"
      },
      {
        "myfilter": "3033",
        "name": "3334",
        "label": "KALIGANJ"
      },
      {
        "myfilter": "3033",
        "name": "3336",
        "label": "KAPASIA"
      },
      {
        "myfilter": "3033",
        "name": "3386",
        "label": "SREEPUR"
      },
      {
        "myfilter": "3035",
        "name": "3532",
        "label": "GOPALGANJ SADAR"
      },
      {
        "myfilter": "3035",
        "name": "3543",
        "label": "KASHIANI"
      },
      {
        "myfilter": "3035",
        "name": "3551",
        "label": "KOTALIPARA"
      },
      {
        "myfilter": "3035",
        "name": "3558",
        "label": "MUKSUDPUR"
      },
      {
        "myfilter": "3035",
        "name": "3591",
        "label": "TUNGIPARA"
      },
      {
        "myfilter": "3039",
        "name": "3907",
        "label": "BAKSHIGANJ"
      },
      {
        "myfilter": "3039",
        "name": "3915",
        "label": "DEWANGANJ"
      },
      {
        "myfilter": "3039",
        "name": "3929",
        "label": "ISLAMPUR"
      },
      {
        "myfilter": "3039",
        "name": "3936",
        "label": "JAMALPUR SADAR"
      },
      {
        "myfilter": "3039",
        "name": "3958",
        "label": "MADARGANJ"
      },
      {
        "myfilter": "3039",
        "name": "3961",
        "label": "MELANDAHA"
      },
      {
        "myfilter": "3039",
        "name": "3985",
        "label": "SARISHABARI UPAZILA"
      },
      {
        "myfilter": "3048",
        "name": "4802",
        "label": "AUSTAGRAM"
      },
      {
        "myfilter": "3048",
        "name": "4806",
        "label": "BAJITPUR"
      },
      {
        "myfilter": "3048",
        "name": "4811",
        "label": "BHAIRAB"
      },
      {
        "myfilter": "3048",
        "name": "4827",
        "label": "HOSSAINPUR"
      },
      {
        "myfilter": "3048",
        "name": "4833",
        "label": "ITNA"
      },
      {
        "myfilter": "3048",
        "name": "4842",
        "label": "KARIMGANJ"
      },
      {
        "myfilter": "3048",
        "name": "4845",
        "label": "KATIADI"
      },
      {
        "myfilter": "3048",
        "name": "4849",
        "label": "KISHOREGANJ SADAR"
      },
      {
        "myfilter": "3048",
        "name": "4854",
        "label": "KULIAR CHAR"
      },
      {
        "myfilter": "3048",
        "name": "4859",
        "label": "MITHAMAIN"
      },
      {
        "myfilter": "3048",
        "name": "4876",
        "label": "NIKLI"
      },
      {
        "myfilter": "3048",
        "name": "4879",
        "label": "PAKUNDIA"
      },
      {
        "myfilter": "3048",
        "name": "4892",
        "label": "TARAIL"
      },
      {
        "myfilter": "3054",
        "name": "5440",
        "label": "KALKINI"
      },
      {
        "myfilter": "3054",
        "name": "5454",
        "label": "MADARIPUR SADAR"
      },
      {
        "myfilter": "3054",
        "name": "5480",
        "label": "RAJOIR"
      },
      {
        "myfilter": "3054",
        "name": "5487",
        "label": "SHIBCHAR"
      },
      {
        "myfilter": "3056",
        "name": "5610",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "3056",
        "name": "5622",
        "label": "GHIOR"
      },
      {
        "myfilter": "3056",
        "name": "5628",
        "label": "HARIRAMPUR"
      },
      {
        "myfilter": "3056",
        "name": "5646",
        "label": "MANIKGANJ SADAR"
      },
      {
        "myfilter": "3056",
        "name": "5670",
        "label": "SATURIA"
      },
      {
        "myfilter": "3056",
        "name": "5678",
        "label": "SHIBALAYA"
      },
      {
        "myfilter": "3056",
        "name": "5682",
        "label": "SINGAIR"
      },
      {
        "myfilter": "3059",
        "name": "5924",
        "label": "GAZARIA"
      },
      {
        "myfilter": "3059",
        "name": "5944",
        "label": "LOHAJANG"
      },
      {
        "myfilter": "3059",
        "name": "5956",
        "label": "MUNSHIGANJ SADAR"
      },
      {
        "myfilter": "3059",
        "name": "5974",
        "label": "SERAJDIKHAN"
      },
      {
        "myfilter": "3059",
        "name": "5984",
        "label": "SREENAGAR"
      },
      {
        "myfilter": "3059",
        "name": "5994",
        "label": "TONGIBARI"
      },
      {
        "myfilter": "3061",
        "name": "6113",
        "label": "BHALUKA"
      },
      {
        "myfilter": "3061",
        "name": "6116",
        "label": "DHOBAURA"
      },
      {
        "myfilter": "3061",
        "name": "6120",
        "label": "FULBARIA"
      },
      {
        "myfilter": "3061",
        "name": "6122",
        "label": "GAFFARGAON"
      },
      {
        "myfilter": "3061",
        "name": "6123",
        "label": "GAURIPUR"
      },
      {
        "myfilter": "3061",
        "name": "6124",
        "label": "HALUAGHAT"
      },
      {
        "myfilter": "3061",
        "name": "6131",
        "label": "ISHWARGANJ"
      },
      {
        "myfilter": "3061",
        "name": "6165",
        "label": "MUKTAGACHHA"
      },
      {
        "myfilter": "3061",
        "name": "6152",
        "label": "MYMENSINGH SADAR"
      },
      {
        "myfilter": "3061",
        "name": "6172",
        "label": "NANDAIL"
      },
      {
        "myfilter": "3061",
        "name": "6181",
        "label": "PHULPUR"
      },
      {
        "myfilter": "3061",
        "name": "6194",
        "label": "TRISHAL"
      },
      {
        "myfilter": "3067",
        "name": "6702",
        "label": "ARAIHAZAR"
      },
      {
        "myfilter": "3067",
        "name": "6706",
        "label": "BANDAR"
      },
      {
        "myfilter": "3067",
        "name": "6758",
        "label": "NARAYANGANJ SADAR"
      },
      {
        "myfilter": "3067",
        "name": "6768",
        "label": "RUPGANJ"
      },
      {
        "myfilter": "3067",
        "name": "6704",
        "label": "SONARGAON"
      },
      {
        "myfilter": "3068",
        "name": "6807",
        "label": "BELABO"
      },
      {
        "myfilter": "3068",
        "name": "6852",
        "label": "MANOHARDI"
      },
      {
        "myfilter": "3068",
        "name": "6860",
        "label": "NARSINGDI SADAR"
      },
      {
        "myfilter": "3068",
        "name": "6863",
        "label": "PALASH"
      },
      {
        "myfilter": "3068",
        "name": "6864",
        "label": "ROYPURA"
      },
      {
        "myfilter": "3068",
        "name": "6876",
        "label": "SHIBPUR"
      },
      {
        "myfilter": "3072",
        "name": "7204",
        "label": "ATPARA"
      },
      {
        "myfilter": "3072",
        "name": "7209",
        "label": "BARHATTA"
      },
      {
        "myfilter": "3072",
        "name": "7218",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "3072",
        "name": "7240",
        "label": "KALMAKANDA"
      },
      {
        "myfilter": "3072",
        "name": "7247",
        "label": "KENDUA"
      },
      {
        "myfilter": "3072",
        "name": "7238",
        "label": "KHALIAJURI"
      },
      {
        "myfilter": "3072",
        "name": "7256",
        "label": "MADAN"
      },
      {
        "myfilter": "3072",
        "name": "7263",
        "label": "MOHANGANJ"
      },
      {
        "myfilter": "3072",
        "name": "7274",
        "label": "NETROKONA SADAR"
      },
      {
        "myfilter": "3072",
        "name": "7283",
        "label": "PURBADHALA"
      },
      {
        "myfilter": "3082",
        "name": "8207",
        "label": "BALIAKANDI"
      },
      {
        "myfilter": "3082",
        "name": "8229",
        "label": "GOALANDA"
      },
      {
        "myfilter": "3082",
        "name": "8247",
        "label": "KALUKHALI"
      },
      {
        "myfilter": "3082",
        "name": "8273",
        "label": "PANGSHA"
      },
      {
        "myfilter": "3082",
        "name": "8276",
        "label": "RAJBARI SADAR"
      },
      {
        "myfilter": "3086",
        "name": "8614",
        "label": "BHEDARGANJ"
      },
      {
        "myfilter": "3086",
        "name": "8625",
        "label": "DAMUDYA"
      },
      {
        "myfilter": "3086",
        "name": "8636",
        "label": "GOSAIRHAT"
      },
      {
        "myfilter": "3086",
        "name": "8665",
        "label": "NARIA"
      },
      {
        "myfilter": "3086",
        "name": "8669",
        "label": "SHARIATPUR SADAR"
      },
      {
        "myfilter": "3086",
        "name": "8694",
        "label": "ZANJIRA"
      },
      {
        "myfilter": "3089",
        "name": "8937",
        "label": "JHENAIGATI"
      },
      {
        "myfilter": "3089",
        "name": "8967",
        "label": "NAKLA"
      },
      {
        "myfilter": "3089",
        "name": "8970",
        "label": "NALITABARI"
      },
      {
        "myfilter": "3089",
        "name": "8988",
        "label": "SHERPUR SADAR"
      },
      {
        "myfilter": "3089",
        "name": "8990",
        "label": "SREEBARDI"
      },
      {
        "myfilter": "3093",
        "name": "9309",
        "label": "BASAIL"
      },
      {
        "myfilter": "3093",
        "name": "9319",
        "label": "BHUAPUR"
      },
      {
        "myfilter": "3093",
        "name": "9323",
        "label": "DELDUAR"
      },
      {
        "myfilter": "3093",
        "name": "9325",
        "label": "DHANBARI"
      },
      {
        "myfilter": "3093",
        "name": "9328",
        "label": "GHATAIL"
      },
      {
        "myfilter": "3093",
        "name": "9338",
        "label": "GOPALPUR"
      },
      {
        "myfilter": "3093",
        "name": "9347",
        "label": "KALIHATI"
      },
      {
        "myfilter": "3093",
        "name": "9357",
        "label": "MADHUPUR"
      },
      {
        "myfilter": "3093",
        "name": "9366",
        "label": "MIRZAPUR"
      },
      {
        "myfilter": "3093",
        "name": "9376",
        "label": "NAGARPUR"
      },
      {
        "myfilter": "3093",
        "name": "9385",
        "label": "SAKHIPUR"
      },
      {
        "myfilter": "3093",
        "name": "9395",
        "label": "TANGAIL SADAR"
      },
      {
        "myfilter": "4001",
        "name": "0108",
        "label": "BAGERHAT SADAR"
      },
      {
        "myfilter": "4001",
        "name": "0114",
        "label": "CHITALMARI"
      },
      {
        "myfilter": "4001",
        "name": "0134",
        "label": "FAKIRHAT"
      },
      {
        "myfilter": "4001",
        "name": "0138",
        "label": "KACHUA"
      },
      {
        "myfilter": "4001",
        "name": "0156",
        "label": "MOLLAHAT"
      },
      {
        "myfilter": "4001",
        "name": "0158",
        "label": "MONGLA"
      },
      {
        "myfilter": "4001",
        "name": "0160",
        "label": "MORRELGANJ"
      },
      {
        "myfilter": "4001",
        "name": "0173",
        "label": "RAMPAL"
      },
      {
        "myfilter": "4001",
        "name": "0177",
        "label": "SARANKHOLA"
      },
      {
        "myfilter": "4018",
        "name": "1807",
        "label": "ALAMDANGA"
      },
      {
        "myfilter": "4018",
        "name": "1823",
        "label": "CHUADANGA SADAR"
      },
      {
        "myfilter": "4018",
        "name": "1831",
        "label": "DAMURHUDA"
      },
      {
        "myfilter": "4018",
        "name": "1855",
        "label": "JIBAN NAGAR"
      },
      {
        "myfilter": "4041",
        "name": "4104",
        "label": "ABHAYNAGAR"
      },
      {
        "myfilter": "4041",
        "name": "4109",
        "label": "BAGHER PARA"
      },
      {
        "myfilter": "4041",
        "name": "4111",
        "label": "CHAUGACHHA"
      },
      {
        "myfilter": "4041",
        "name": "4147",
        "label": "JESSORE SADAR"
      },
      {
        "myfilter": "4041",
        "name": "4123",
        "label": "JHIKARGACHHA"
      },
      {
        "myfilter": "4041",
        "name": "4138",
        "label": "KESHABPUR"
      },
      {
        "myfilter": "4041",
        "name": "4161",
        "label": "MANIRAMPUR"
      },
      {
        "myfilter": "4041",
        "name": "4190",
        "label": "SHARSHA"
      },
      {
        "myfilter": "4044",
        "name": "4414",
        "label": "HARINAKUNDA"
      },
      {
        "myfilter": "4044",
        "name": "4419",
        "label": "JHENAIDAH SADAR"
      },
      {
        "myfilter": "4044",
        "name": "4433",
        "label": "KALIGANJ"
      },
      {
        "myfilter": "4044",
        "name": "4442",
        "label": "KOTCHANDPUR"
      },
      {
        "myfilter": "4044",
        "name": "4471",
        "label": "MAHESHPUR"
      },
      {
        "myfilter": "4044",
        "name": "4480",
        "label": "SHAILKUPA"
      },
      {
        "myfilter": "4047",
        "name": "4712",
        "label": "BATIAGHATA"
      },
      {
        "myfilter": "4047",
        "name": "4717",
        "label": "DACOPE"
      },
      {
        "myfilter": "4047",
        "name": "4740",
        "label": "DIGHALIA"
      },
      {
        "myfilter": "4047",
        "name": "4730",
        "label": "DUMURIA"
      },
      {
        "myfilter": "4047",
        "name": "4753",
        "label": "KOYRA"
      },
      {
        "myfilter": "4047",
        "name": "4764",
        "label": "PAIKGACHHA"
      },
      {
        "myfilter": "4047",
        "name": "4769",
        "label": "PHULTALA"
      },
      {
        "myfilter": "4047",
        "name": "4775",
        "label": "RUPSA"
      },
      {
        "myfilter": "4047",
        "name": "4794",
        "label": "TEROKHADA"
      },
      {
        "myfilter": "4050",
        "name": "5015",
        "label": "BHERAMARA"
      },
      {
        "myfilter": "4050",
        "name": "5039",
        "label": "DAULATPUR"
      },
      {
        "myfilter": "4050",
        "name": "5063",
        "label": "KHOKSA"
      },
      {
        "myfilter": "4050",
        "name": "5071",
        "label": "KUMARKHALI"
      },
      {
        "myfilter": "4050",
        "name": "5079",
        "label": "KUSHTIA SADAR"
      },
      {
        "myfilter": "4050",
        "name": "5094",
        "label": "MIRPUR"
      },
      {
        "myfilter": "4055",
        "name": "5557",
        "label": "MAGURA SADAR"
      },
      {
        "myfilter": "4055",
        "name": "5566",
        "label": "MOHAMMADPUR"
      },
      {
        "myfilter": "4055",
        "name": "5585",
        "label": "SHALIKHA"
      },
      {
        "myfilter": "4055",
        "name": "5595",
        "label": "SREEPUR"
      },
      {
        "myfilter": "4057",
        "name": "5747",
        "label": "GANGNI"
      },
      {
        "myfilter": "4057",
        "name": "5787",
        "label": "MEHERPUR SADAR"
      },
      {
        "myfilter": "4057",
        "name": "5760",
        "label": "MUJIB NAGAR"
      },
      {
        "myfilter": "4065",
        "name": "6528",
        "label": "KALIA"
      },
      {
        "myfilter": "4065",
        "name": "6552",
        "label": "LOHAGARA"
      },
      {
        "myfilter": "4065",
        "name": "6576",
        "label": "NARAIL SADAR"
      },
      {
        "myfilter": "4087",
        "name": "8704",
        "label": "ASSASUNI"
      },
      {
        "myfilter": "4087",
        "name": "8725",
        "label": "DEBHATA"
      },
      {
        "myfilter": "4087",
        "name": "8743",
        "label": "KALAROA"
      },
      {
        "myfilter": "4087",
        "name": "8747",
        "label": "KALIGANJ"
      },
      {
        "myfilter": "4087",
        "name": "8782",
        "label": "SATKHIRA SADAR"
      },
      {
        "myfilter": "4087",
        "name": "8786",
        "label": "SHYAMNAGAR"
      },
      {
        "myfilter": "4087",
        "name": "8790",
        "label": "TALA"
      },
      {
        "myfilter": "5010",
        "name": "1006",
        "label": "ADAMDIGHI"
      },
      {
        "myfilter": "5010",
        "name": "1020",
        "label": "BOGRA SADAR"
      },
      {
        "myfilter": "5010",
        "name": "1027",
        "label": "DHUNAT"
      },
      {
        "myfilter": "5010",
        "name": "1033",
        "label": "DHUPCHANCHIA"
      },
      {
        "myfilter": "5010",
        "name": "1040",
        "label": "GABTALI"
      },
      {
        "myfilter": "5010",
        "name": "1054",
        "label": "KAHALOO"
      },
      {
        "myfilter": "5010",
        "name": "1067",
        "label": "NANDIGRAM"
      },
      {
        "myfilter": "5010",
        "name": "1081",
        "label": "SARIAKANDI"
      },
      {
        "myfilter": "5010",
        "name": "1085",
        "label": "SHAJAHANPUR"
      },
      {
        "myfilter": "5010",
        "name": "1088",
        "label": "SHERPUR"
      },
      {
        "myfilter": "5010",
        "name": "1094",
        "label": "SHIBGANJ"
      },
      {
        "myfilter": "5010",
        "name": "1095",
        "label": "SONATOLA"
      },
      {
        "myfilter": "5070",
        "name": "7018",
        "label": "BHOLAHAT"
      },
      {
        "myfilter": "5070",
        "name": "7066",
        "label": "CHAPAI NABABGANJ SADAR"
      },
      {
        "myfilter": "5070",
        "name": "7037",
        "label": "GOMASTAPUR"
      },
      {
        "myfilter": "5070",
        "name": "7056",
        "label": "NACHOLE"
      },
      {
        "myfilter": "5070",
        "name": "7088",
        "label": "SHIBGANJ"
      },
      {
        "myfilter": "5038",
        "name": "3813",
        "label": "AKKELPUR"
      },
      {
        "myfilter": "5038",
        "name": "3847",
        "label": "JOYPURHAT SADAR"
      },
      {
        "myfilter": "5038",
        "name": "3858",
        "label": "KALAI"
      },
      {
        "myfilter": "5038",
        "name": "3861",
        "label": "KHETLAL"
      },
      {
        "myfilter": "5038",
        "name": "3874",
        "label": "PANCHBIBI"
      },
      {
        "myfilter": "5064",
        "name": "6403",
        "label": "ATRAI"
      },
      {
        "myfilter": "5064",
        "name": "6406",
        "label": "BADALGACHHI"
      },
      {
        "myfilter": "5064",
        "name": "6428",
        "label": "DHAMOIRHAT"
      },
      {
        "myfilter": "5064",
        "name": "6450",
        "label": "MAHADEBPUR"
      },
      {
        "myfilter": "5064",
        "name": "6447",
        "label": "MANDA"
      },
      {
        "myfilter": "5064",
        "name": "6460",
        "label": "NAOGAON SADAR"
      },
      {
        "myfilter": "5064",
        "name": "6469",
        "label": "NIAMATPUR"
      },
      {
        "myfilter": "5064",
        "name": "6475",
        "label": "PATNITALA"
      },
      {
        "myfilter": "5064",
        "name": "6479",
        "label": "PORSHA"
      },
      {
        "myfilter": "5064",
        "name": "6485",
        "label": "RANINAGAR"
      },
      {
        "myfilter": "5064",
        "name": "6486",
        "label": "SAPAHAR"
      },
      {
        "myfilter": "5069",
        "name": "6909",
        "label": "BAGATIPARA"
      },
      {
        "myfilter": "5069",
        "name": "6915",
        "label": "BARAIGRAM"
      },
      {
        "myfilter": "5069",
        "name": "6941",
        "label": "GURUDASPUR"
      },
      {
        "myfilter": "5069",
        "name": "6944",
        "label": "LALPUR"
      },
      {
        "myfilter": "5069",
        "name": "6963",
        "label": "NATORE SADAR"
      },
      {
        "myfilter": "5069",
        "name": "6991",
        "label": "SINGRA"
      },
      {
        "myfilter": "5076",
        "name": "7605",
        "label": "ATGHARIA"
      },
      {
        "myfilter": "5076",
        "name": "7616",
        "label": "BERA"
      },
      {
        "myfilter": "5076",
        "name": "7619",
        "label": "BHANGURA"
      },
      {
        "myfilter": "5076",
        "name": "7622",
        "label": "CHATMOHAR"
      },
      {
        "myfilter": "5076",
        "name": "7633",
        "label": "FARIDPUR"
      },
      {
        "myfilter": "5076",
        "name": "7639",
        "label": "ISHWARDI"
      },
      {
        "myfilter": "5076",
        "name": "7655",
        "label": "PABNA SADAR"
      },
      {
        "myfilter": "5076",
        "name": "7672",
        "label": "SANTHIA"
      },
      {
        "myfilter": "5076",
        "name": "7683",
        "label": "SUJANAGAR"
      },
      {
        "myfilter": "5081",
        "name": "8110",
        "label": "BAGHA"
      },
      {
        "myfilter": "5081",
        "name": "8112",
        "label": "BAGHMARA"
      },
      {
        "myfilter": "5081",
        "name": "8125",
        "label": "CHARGHAT"
      },
      {
        "myfilter": "5081",
        "name": "8131",
        "label": "DURGAPUR"
      },
      {
        "myfilter": "5081",
        "name": "8134",
        "label": "GODAGARI"
      },
      {
        "myfilter": "5081",
        "name": "8153",
        "label": "MOHANPUR"
      },
      {
        "myfilter": "5081",
        "name": "8172",
        "label": "PABA"
      },
      {
        "myfilter": "5081",
        "name": "8182",
        "label": "PUTHIA"
      },
      {
        "myfilter": "5081",
        "name": "8194",
        "label": "TANORE"
      },
      {
        "myfilter": "5088",
        "name": "8811",
        "label": "BELKUCHI"
      },
      {
        "myfilter": "5088",
        "name": "8827",
        "label": "CHAUHALI"
      },
      {
        "myfilter": "5088",
        "name": "8844",
        "label": "KAMARKHANDA"
      },
      {
        "myfilter": "5088",
        "name": "8850",
        "label": "KAZIPUR"
      },
      {
        "myfilter": "5088",
        "name": "8861",
        "label": "ROYGANJ"
      },
      {
        "myfilter": "5088",
        "name": "8867",
        "label": "SHAHJADPUR"
      },
      {
        "myfilter": "5088",
        "name": "8878",
        "label": "SIRAJGANJ SADAR"
      },
      {
        "myfilter": "5088",
        "name": "8889",
        "label": "TARASH"
      },
      {
        "myfilter": "5088",
        "name": "8894",
        "label": "ULLAH PARA"
      },
      {
        "myfilter": "5527",
        "name": "2717",
        "label": "BIRAL"
      },
      {
        "myfilter": "5527",
        "name": "2710",
        "label": "BIRAMPUR"
      },
      {
        "myfilter": "5527",
        "name": "2712",
        "label": "BIRGANJ"
      },
      {
        "myfilter": "5527",
        "name": "2721",
        "label": "BOCHAGANJ"
      },
      {
        "myfilter": "5527",
        "name": "2730",
        "label": "CHIRIRBANDAR"
      },
      {
        "myfilter": "5527",
        "name": "2764",
        "label": "DINAJPUR SADAR"
      },
      {
        "myfilter": "5527",
        "name": "2738",
        "label": "FULBARI"
      },
      {
        "myfilter": "5527",
        "name": "2743",
        "label": "GHORAGHAT"
      },
      {
        "myfilter": "5527",
        "name": "2747",
        "label": "HAKIMPUR"
      },
      {
        "myfilter": "5527",
        "name": "2756",
        "label": "KAHAROLE"
      },
      {
        "myfilter": "5527",
        "name": "2760",
        "label": "KHANSAMA"
      },
      {
        "myfilter": "5527",
        "name": "2769",
        "label": "NAWABGANJ"
      },
      {
        "myfilter": "5527",
        "name": "2777",
        "label": "PARBATIPUR"
      },
      {
        "myfilter": "5532",
        "name": "3221",
        "label": "FULCHHARI"
      },
      {
        "myfilter": "5532",
        "name": "3224",
        "label": "GAIBANDHA SADAR"
      },
      {
        "myfilter": "5532",
        "name": "3230",
        "label": "GOBINDAGANJ"
      },
      {
        "myfilter": "5532",
        "name": "3267",
        "label": "PALASHBARI"
      },
      {
        "myfilter": "5532",
        "name": "3282",
        "label": "SADULLAPUR"
      },
      {
        "myfilter": "5532",
        "name": "3288",
        "label": "SAGHATA"
      },
      {
        "myfilter": "5532",
        "name": "3291",
        "label": "SUNDARGANJ"
      },
      {
        "myfilter": "5549",
        "name": "4906",
        "label": "BHURUNGAMARI"
      },
      {
        "myfilter": "5549",
        "name": "4908",
        "label": "CHAR RAJIBPUR"
      },
      {
        "myfilter": "5549",
        "name": "4909",
        "label": "CHILMARI"
      },
      {
        "myfilter": "5549",
        "name": "4952",
        "label": "KURIGRAM SADAR"
      },
      {
        "myfilter": "5549",
        "name": "4961",
        "label": "NAGESHWARI"
      },
      {
        "myfilter": "5549",
        "name": "4918",
        "label": "PHULBARI"
      },
      {
        "myfilter": "5549",
        "name": "4977",
        "label": "RAJARHAT"
      },
      {
        "myfilter": "5549",
        "name": "4979",
        "label": "RAUMARI"
      },
      {
        "myfilter": "5549",
        "name": "4994",
        "label": "ULIPUR"
      },
      {
        "myfilter": "5552",
        "name": "5202",
        "label": "ADITMARI"
      },
      {
        "myfilter": "5552",
        "name": "5233",
        "label": "HATIBANDHA"
      },
      {
        "myfilter": "5552",
        "name": "5239",
        "label": "KALIGANJ"
      },
      {
        "myfilter": "5552",
        "name": "5255",
        "label": "LALMONIRHAT SADAR"
      },
      {
        "myfilter": "5552",
        "name": "5270",
        "label": "PATGRAM"
      },
      {
        "myfilter": "5573",
        "name": "7312",
        "label": "DIMLA UPAZILA"
      },
      {
        "myfilter": "5573",
        "name": "7315",
        "label": "DOMAR UPAZILA"
      },
      {
        "myfilter": "5573",
        "name": "7336",
        "label": "JALDHAKA UPAZILA"
      },
      {
        "myfilter": "5573",
        "name": "7345",
        "label": "KISHOREGANJ UPAZILA"
      },
      {
        "myfilter": "5573",
        "name": "7364",
        "label": "NILPHAMARI SADAR UPAZ"
      },
      {
        "myfilter": "5573",
        "name": "7385",
        "label": "SAIDPUR UPAZILA"
      },
      {
        "myfilter": "5577",
        "name": "7704",
        "label": "ATWARI"
      },
      {
        "myfilter": "5577",
        "name": "7725",
        "label": "BODA"
      },
      {
        "myfilter": "5577",
        "name": "7734",
        "label": "DEBIGANJ"
      },
      {
        "myfilter": "5577",
        "name": "7773",
        "label": "PANCHAGARH SADAR"
      },
      {
        "myfilter": "5577",
        "name": "7790",
        "label": "TENTULIA"
      },
      {
        "myfilter": "5585",
        "name": "8503",
        "label": "BADARGANJ"
      },
      {
        "myfilter": "5585",
        "name": "8527",
        "label": "GANGACHARA"
      },
      {
        "myfilter": "5585",
        "name": "8542",
        "label": "KAUNIA"
      },
      {
        "myfilter": "5585",
        "name": "8558",
        "label": "MITHA PUKUR"
      },
      {
        "myfilter": "5585",
        "name": "8573",
        "label": "PIRGACHHA"
      },
      {
        "myfilter": "5585",
        "name": "8576",
        "label": "PIRGANJ"
      },
      {
        "myfilter": "5585",
        "name": "8549",
        "label": "RANGPUR SADAR"
      },
      {
        "myfilter": "5585",
        "name": "8592",
        "label": "TARAGANJ"
      },
      {
        "myfilter": "5594",
        "name": "9408",
        "label": "BALIADANGI"
      },
      {
        "myfilter": "5594",
        "name": "9451",
        "label": "HARIPUR"
      },
      {
        "myfilter": "5594",
        "name": "9482",
        "label": "PIRGANJ"
      },
      {
        "myfilter": "5594",
        "name": "9486",
        "label": "RANISANKAIL"
      },
      {
        "myfilter": "5594",
        "name": "9494",
        "label": "THAKURGAON SADAR"
      },
      {
        "myfilter": "6036",
        "name": "3602",
        "label": "AJMIRIGANJ"
      },
      {
        "myfilter": "6036",
        "name": "3605",
        "label": "BAHUBAL"
      },
      {
        "myfilter": "6036",
        "name": "3611",
        "label": "BANIACHONG"
      },
      {
        "myfilter": "6036",
        "name": "3626",
        "label": "CHUNARUGHAT"
      },
      {
        "myfilter": "6036",
        "name": "3644",
        "label": "HABIGANJ SADAR"
      },
      {
        "myfilter": "6036",
        "name": "3668",
        "label": "LAKHAI"
      },
      {
        "myfilter": "6036",
        "name": "3671",
        "label": "MADHABPUR"
      },
      {
        "myfilter": "6036",
        "name": "3677",
        "label": "NABIGANJ"
      },
      {
        "myfilter": "6058",
        "name": "5814",
        "label": "BARLEKHA"
      },
      {
        "myfilter": "6058",
        "name": "5835",
        "label": "JURI"
      },
      {
        "myfilter": "6058",
        "name": "5856",
        "label": "KAMALGANJ"
      },
      {
        "myfilter": "6058",
        "name": "5865",
        "label": "KULAURA"
      },
      {
        "myfilter": "6058",
        "name": "5874",
        "label": "MAULVIBAZAR SADAR"
      },
      {
        "myfilter": "6058",
        "name": "5880",
        "label": "RAJNAGAR"
      },
      {
        "myfilter": "6058",
        "name": "5883",
        "label": "SREEMANGAL"
      },
      {
        "myfilter": "6090",
        "name": "9018",
        "label": "BISHWAMBARPUR"
      },
      {
        "myfilter": "6090",
        "name": "9023",
        "label": "CHHATAK"
      },
      {
        "myfilter": "6090",
        "name": "9027",
        "label": "DAKSHIN SUNAMGANJ"
      },
      {
        "myfilter": "6090",
        "name": "9029",
        "label": "DERAI"
      },
      {
        "myfilter": "6090",
        "name": "9032",
        "label": "DHARAMPASHA"
      },
      {
        "myfilter": "6090",
        "name": "9033",
        "label": "DOWARABAZAR"
      },
      {
        "myfilter": "6090",
        "name": "9047",
        "label": "JAGANNATHPUR"
      },
      {
        "myfilter": "6090",
        "name": "9050",
        "label": "JAMALGANJ"
      },
      {
        "myfilter": "6090",
        "name": "9086",
        "label": "SULLA"
      },
      {
        "myfilter": "6090",
        "name": "9089",
        "label": "SUNAMGANJ SADAR"
      },
      {
        "myfilter": "6090",
        "name": "9092",
        "label": "TAHIRPUR"
      },
      {
        "myfilter": "6091",
        "name": "9108",
        "label": "BALAGANJ"
      },
      {
        "myfilter": "6091",
        "name": "9117",
        "label": "BEANI BAZAR"
      },
      {
        "myfilter": "6091",
        "name": "9120",
        "label": "BISHWANATH"
      },
      {
        "myfilter": "6091",
        "name": "9127",
        "label": "COMPANIGANJ"
      },
      {
        "myfilter": "6091",
        "name": "9131",
        "label": "DAKSHIN SURMA"
      },
      {
        "myfilter": "6091",
        "name": "9135",
        "label": "FENCHUGANJ"
      },
      {
        "myfilter": "6091",
        "name": "9138",
        "label": "GOLAPGANJ"
      },
      {
        "myfilter": "6091",
        "name": "9141",
        "label": "GOWAINGHAT"
      },
      {
        "myfilter": "6091",
        "name": "9153",
        "label": "JAINTIAPUR"
      },
      {
        "myfilter": "6091",
        "name": "9159",
        "label": "KANAIGHAT"
      },
      {
        "myfilter": "6091",
        "name": "9162",
        "label": "SYLHET SADAR"
      },
      {
        "myfilter": "6091",
        "name": "9194",
        "label": "ZAKIGANJ"
      }
    ],
    "antibacterial_usage_drinking_water": [
      {
        "name": "1",
        "label": "Feed"
      },
      {
        "name": "2",
        "label": "Injection"
      }
    ],
    "schedule_vaccine1_before_production": [
      {
        "name": "1",
        "label": "0-2 weeks"
      },
      {
        "name": "2",
        "label": "3-5 weeks"
      },
      {
        "name": "3",
        "label": "6-8 weeks"
      },
      {
        "name": "4",
        "label": "9-11 weeks"
      },
      {
        "name": "5",
        "label": "12-14 weeks"
      },
      {
        "name": "6",
        "label": "15 \u2013 17 weeks"
      },
      {
        "name": "7",
        "label": "18-20 weeks"
      }
    ],
    "birds_production_purpose": [
      {
        "name": "1",
        "label": "Egg"
      },
      {
        "name": "2",
        "label": "Meat"
      },
      {
        "name": "3",
        "label": "Egg & Meat"
      },
      {
        "name": "4",
        "label": "Breeder"
      },
      {
        "name": "5",
        "label": "Sport"
      },
      {
        "name": "6",
        "label": "Pet"
      }
    ],
    "route": [
      {
        "name": "1",
        "label": "Drinking water"
      },
      {
        "name": "2",
        "label": "Feed"
      },
      {
        "name": "3",
        "label": "Injection"
      }
    ],
    "vaccination_given_by": [
      {
        "name": "1",
        "label": "Outside vaccinator"
      },
      {
        "name": "2",
        "label": "Farm Staff"
      },
      {
        "name": "3",
        "label": "Both"
      }
    ],
    "schedule_vaccine1_after_production": [
      {
        "name": "1",
        "label": "21-30 weeks"
      },
      {
        "name": "2",
        "label": "31-40 weeks"
      },
      {
        "name": "3",
        "label": "41-50 weeks"
      },
      {
        "name": "4",
        "label": "51-60 weeks"
      },
      {
        "name": "5",
        "label": "61-70 weeks"
      },
      {
        "name": "6",
        "label": "71-80 weeks"
      }
    ],
    "age_arrival_farm": [
      {
        "name": "1",
        "label": "DOC"
      },
      {
        "name": "2",
        "label": "Pullet"
      },
      {
        "name": "3",
        "label": "Adult"
      }
    ]
  }
};

export const sampleUserInput = {
  'text_widgets/string_number_widget': 'hello',
  repeat_1: [
    {
      'repeat_1/repeat_q': 'gsh',
    },
  ],
  'text_widgets/division': '10',
  'text_widgets/district': '1004',
  'text_widgets/division_d': '10',
  'text_widgets/district(NEW)': '1004',
  'text_widgets/division_d_all': ['10'],
  'text_widgets/district_all': ['1004'],
  'text_widgets/division_d_ck': ['10'],
  'text_widgets/district_all_ck': ['1004'],
  'text_widgets/string_widget': 'hello',
  'number_widgets/integer_widget': '1',
  'number_widgets/integer_thousands_sep_widget': '121',
  'number_widgets/ex_integer_widget': '12',
  'number_widgets/decimal_widget': '12.06',
  'select_one_widgets/return_from': 'BY',
  'select_multi_widgets/spinner_multi_widget': ['c'],
  'date_time_widgets/date_time_widget': '2019-11-23T10:30:00.000Z',
  'date_time_widgets/islamic_date_widget': '2019-07-11T00:00:00.000Z',
};

// tslint:disable
export const geo = [
  {
    district_code: '1004',
    district_name: 'BargunaH',
    division_code: '10',
    division_name: 'Barisal',
    union_code: '10040913',
    union_name: 'Amtali',
    upazila_code: '100409',
    upazila_name: 'Amtali',
  },
  {
    district_code: '1005',
    district_name: 'BargunaL',
    division_code: '10',
    division_name: 'Barisal',
    union_code: '10040915',
    union_name: 'Arpangashia',
    upazila_code: '100409',
    upazila_name: 'Amtali',
  },
  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030431',
    union_name: 'Alikadam',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030480',
    union_name: 'Nayapara',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
];

export const geo_1 = [
  {
    district_code: '1004',
    district_name: 'BargunaH',
    division_code: '10',
    division_name: 'Barisal',
    union_code: '10040913',
    union_name: 'Amtali',
    upazila_code: '100409',
    upazila_name: 'Amtali',
  },
  {
    district_code: '1005',
    district_name: 'BargunaL',
    division_code: '10',
    division_name: 'Barisal',
    union_code: '10040915',
    union_name: 'Arpangashia',
    upazila_code: '100409',
    upazila_name: 'Amtali',
  },
  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030431',
    union_name: 'Alikadam',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030480',
    union_name: 'Nayapara',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
];

export const geo_2 = [
  {
    district_code: '1004',
    district_name: 'BargunaH',
    division_code: '10',
    division_name: 'Barisal',
    union_code: '10040913',
    union_name: 'Amtali',
    upazila_code: '100409',
    upazila_name: 'Amtali',
  },

  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030431',
    union_name: 'Alikadam',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
  {
    district_code: '2003',
    district_name: 'Bandarban',
    division_code: '20',
    division_name: 'Chittagong',
    union_code: '20030480',
    union_name: 'Nayapara',
    upazila_code: '200304',
    upazila_name: 'Alikadam',
  },
];

export const CSV_LIST = { geo, geo_1, geo_2 };

export const languageOptions = [
  {
    label: 'English',
    value: 'English',
  },

  {
    label: 'Bangla',
    value: 'Bangla',
  },
];

// tslint: enable
export type DEMO_FORM_JSON = typeof DEMO_FORM_JSON;