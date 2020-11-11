import React, { Fragment, useState } from 'react';

import Select from 'react-select';
import { groupStyles, groupBadgeStyles, TagsSelect } from './style';

import { YellowButton } from '../../../style/Button';
import { FormGroup, Label2, Input2 } from '../../../style/Inputs';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
]

const groupedOptions = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
  ]

const formatGroupLabel = data => (
    <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);


const FiltersWindow = ( { props }) => {

    const [selection, setSelection] = useState(null);

    return (
        <Fragment>
            <FormGroup>
                <Label2>Start Date</Label2>
                <Input2 type="text" />
            </FormGroup>
            <FormGroup>
                <Label2>End Date</Label2>
                <Select options={options} />
            </FormGroup>
            <Select options={options} />

            <TagsSelect>
                <Select
                    // defaultValue={colourOptions[1]}
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                />
            </TagsSelect>


            <FormGroup>
                <Label2>Tag</Label2>
                <Input2 type="text" />
            </FormGroup>
            <FormGroup>
                <Label2>Article</Label2>
                <Input2 type="text" />
            </FormGroup>
            <FormGroup>
                <Label2>Supplier</Label2>
                <Input2 type="text" />
            </FormGroup>
            <div className="filterButton">
                <YellowButton style={{"width": "100%"}}>
                    Apply Filter
                </YellowButton>
            </div>

        </Fragment>
    );
};

export default FiltersWindow