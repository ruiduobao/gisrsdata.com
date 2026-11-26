---
title: "NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature"
date: 2026-11-03 12:00:00
---

# NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature

Original name: NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature

## What this dataset is

The AVHRR Pathfinder Version 5.3 Sea Surface Temperature dataset (PFV53)
is a collection of global, twice-daily 4km sea surface temperature data
produced in a partnership by the NOAA National Oceanographic Data Center
and the University of Miami's Rosenstiel School of Marine and Atmospheric
Science. PFV53 was computed from data from the AVHRR instruments
on board NOAA's polar orbiting satellite series using an entirely
modernized system based on SeaDAS. PFV53 data are nearly 100%
compliant with the GHRSST Data Specification Version 2.0 for L3C
products and only deviate from that standard in that 'sses_bias',
'sses_standard_deviation', and 'sst_dtime' variables are empty and hence
not included into EE assets. PFV53 data were collected through the
operational periods of the NOAA-7 through NOAA-19 Polar Operational
Environmental Satellites (POES), and are available from 1981 to 2014.
Additional information is available at the
[NOAA Pathfinder site](https://www.nodc.noaa.gov/satellitedata/pathfinder4km53/).

Additional band details can be found in the
[Tech Specs](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Sea_Surface_Temperature_Pathfinder/AlgorithmDescription_01B-08.pdf)
page.

These data were provided by GHRSST and the US NOAA National
Centers for Environmental Information (NCEI). This project was
supported in part by a grant from the NOAA Climate Data Record (CDR)
Program for satellites.

## Coverage and time range

- Coverage: Coverage: global oceans; time span: 1981 to 2023; resolution: 4,000 m.
- Time range: 1981-08-24 至 2023-12-30

## Resolution and specifications

- Spatial resolution: about 4,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sea_surface_temperature | Skin temperature of the ocean | 4000 |  |
| dt_analysis | The difference between this SST and the previous day's. | 4000 |  |
| wind_speed | These wind speeds were created by NCEP-DOE Atmospheric Model Intercomparison Project (AMIP-II) reanalysis (R-2) and represent winds at 10 meters above the sea surface. | 4000 |  |
| sea_ice_fraction | Sea ice concentration data are taken from the EUMETSAT Ocean and Sea Ice Satellite Application Facility (OSISAF) [Global Daily Sea Ice Concentration Reprocessing Data Set accession.nodc.noaa.gov/0068294](https://data.cnra.ca.gov/dataset/global-daily-sea-ice-concentration-reprocessing-data-set-for-1978-2007-from-the-eumetsat-ocean-) when these data are available. The data are reprojected and interpolated from their original polar stereographic projection at 10km spatial resolution to the 4km Pathfinder Version 5.3 grid. When the OSISAF data are not available for both hemispheres on a given day, the sea ice concentration data are taken from the sea_ice_fraction variable found in the L4 GHRSST DailyOI SST product from NOAA/NCDC, and are interpolated from the 25km DailyOI grid to the 4km Pathfinder Version 5.3 grid. | 4000 |  |
| aerosol_dynamic_indicator | Aerosol optical thickness (100 KM) data are taken from the CLASS AERO100 products, which are created from AVHRR channel 1 optical thickness retrievals from AVHRR global area coverage (GAC) data. The aerosol optical thickness measurements are interpolated from their original 1 degree x 1 degree resolution to the 4km Pathfinder Version 5.3 grid. | 4000 |  |
| quality_level | Note, the native Pathfinder processing system returns quality levels ranging from 0 to 7 (7 is best quality; -1 represents missing data) and has been converted to the extent possible into the six levels required by the GDS2 (ranging from 0 to 5, where 5 is best). Below is the conversion table:  - GDS2 required quality_level 5 = native Pathfinder quality   level 7 == best_quality  - GDS2 required quality_level 4 = native Pathfinder quality   level 4-6 == acceptable_quality  - GDS2 required quality_level 3 = native Pathfinder quality   level 2-3 == low_quality  - GDS2 required quality_level 2 = native Pathfinder   quality level 1 == worst_quality  - GDS2 required quality_level 1 = native Pathfinder quality   level 0 = bad_data  - GDS2 required quality_level 0 = native Pathfinder quality   level -1 = missing_data  The original Pathfinder quality level is recorded in the optional variable pathfinder_quality_level. | 4000 |  |
| pathfinder_quality_level | The native Pathfinder processing system quality levels, ranging from 0 to 7, where 0 is worst and 7 is best. | 4000 |  |
| l2p_flags | Used to specify the type of input SST data and pass through native flags from the input L2 SST data set. | 4000 |  |

## What you can use it for

- Sea surface temperature monitoring
- Ocean climate research
- Fisheries and marine ecology applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/SST_PATHFINDER/V53');
```

- Earth Engine ID: `NOAA/CDR/SST_PATHFINDER/V53`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_SST_PATHFINDER_V53

## License and citation

- License: proprietary
- Keywords: avhrr, noaa, oceans, pathfinder, sea-ice, sst, temperature, wind
- 数据引用：Baker-Yeboah, S., K. Saha, D. Zhang, K. S. Casey, R. Evans,
and K. A. Kilpatrick (2016). 'Pathfinder Version 5.3 AVHRR Sea Surface
Temperature Climate Data Record', Fall AGU 2016 Poster
(manuscript in progress)

- DOI：10.7289/V52J68XX

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA CDR WHOI: Sea Surface Temperature, Version 2](/en/pages/4fef452a/)
- [NOAA CDR: Ocean Heat Fluxes, Version 2](/en/pages/ab47b752/)
- [NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2](/en/pages/11c640c9/)
- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
