import { TextField, Button, Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { createSvgIcon } from '@mui/material/utils';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import OfflineShareIcon from '@mui/icons-material/OfflineShare';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import './landingpage.css'
import { useEffect } from 'react';
import { UserAuth } from '../firebase/auth';
function LandingPage() {
    const { user } = UserAuth()
    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com/
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
    );
    return (
        <>
            <div className='header'>
                <img src="https://worldref.co/wp-content/uploads/2021/01/WorldRef-black.svg" alt="" />
                <li>
                    <a href="">Services</a>
                    <a href="">Our Work</a>
                    <a href="">App</a>
                    <a href="">My Deals</a>
                    <a href="">Contact Us</a>
                    <a href="">Accent Tech. Pvt. Lmt.</a>
                </li>

            </div>
            <div style={{ margin: '50px 100px 35px 100px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Requests for Quotation</h2>
                    <div>
                        <input style={{ padding: '10px', width: '800px', height: '50px', border: '1px solid rgba(0, 0, 0, 0.12)', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} placeholder='I can provide..' />
                        <Button variant='contained' style={{ textTransform: 'lowercase', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', height: '50px' }}>
                            <SearchIcon />
                            <p> Search</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div style={{ margin: '20px 100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontWeight: 'bold' }}><span id='highlight'>1008</span> Buying Requests from 500 buyers</p>
                <Button id='update_btn' variant='outlined' style={{ gap: '7px' }}>
                    <PlusIcon />
                    <span>Update Preferences</span></Button>
            </div>
            <div style={{ margin: '20px 100px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FilterAltIcon color='primary' />
                <div>
                    <Radio defaultChecked />
                    All
                </div>

                {user ? (
                    <Button style={{ textTransform: 'capitalize' }} variant="contained">Login/Signup</Button>
                ) : (
                    <div>
                        <Radio />
                        RFQs Matching My Preferences
                    </div>
                )}
            </div>
            <Box sx={{ display: 'grid', gridTemplateColumns: '80% 20%', margin: '20px 100px', height: '300px' }}>
                <Box sx={{}}>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                borderTopLeftRadius: 10,
                                padding: '20px',
                            }}>
                            <p>1 Feb 2023</p>
                            <p id='space'><b>RFQ ID</b>   01098098</p>
                            <CheckCircleOutlineIcon variant='medium' />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                borderBottomLeftRadius: 10,
                                padding: '20px',
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '850px' }}>
                                <div style={{ display: 'flex', gap: '2px' }}><p>Deal</p> <p>No:</p> <p>1429</p></div>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    <OfflineShareIcon />
                                    <Typography color='primary'>Share</Typography>
                                </div>
                            </div>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <h4>Spare Parts</h4>
                                <div id='live'>Live</div>
                            </div>
                            <br />
                            <div id='description'>
                                Supply AC Stator Coil Dummy Text Lorem Ipsem Dummy Supply AC Stator Coil Dummy Text Lorem Supply AC Stator Coil Dummy Text
                                Lorem. Supply AC Stator Coil Dummy
                            </div>
                            <br />
                            <div style={{ paddingTop: '10px', paddingBottom: '3px' }}>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="Product" size="small" />
                                    <Chip label="Product" size="small" />
                                    <Chip label="Agriculture" size="small" />
                                    <Chip label="Product" size="small" />
                                    <Chip label="Product" size="small" />
                                </Stack>
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderTopRightRadius: 10,
                            padding: '23px',
                        }}>
                        <div style={{ display: 'flex', gap: '20px' }}><p><b>Closing Date </b></p> 25 Feb 2023 </div>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '25px',
                            height: '213.5px',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderBottomRightRadius: 10,
                            height: '75.5%',
                        }}>
                        <Button className='card_btn' variant="contained"><p>Add to my deals</p></Button>
                        <Button className='card_btn' variant="outlined"><p>Check Details</p></Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '80% 20%', margin: '20px 100px', height: '300px' }}>
                <Box sx={{}}>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                borderTopLeftRadius: 10,
                                padding: '20px',
                            }}>
                            <p>1 Feb 2023</p>
                            <p id='space'><b>RFQ ID</b>   01098098</p>
                            <CheckCircleOutlineIcon variant='medium' />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                borderBottomLeftRadius: 10,
                                padding: '20px',
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '850px' }}>
                                <div style={{ display: 'flex', gap: '2px' }}><p>Deal</p> <p>No:</p> <p>1429</p></div>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    <OfflineShareIcon />
                                    <Typography color='primary'>Share</Typography>
                                </div>
                            </div>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <h4>Spare Parts</h4>
                                <div id='live'>Live</div>
                            </div>
                            <br />
                            <div id='description'>
                                Supply AC Stator Coil Dummy Text Lorem Ipsem Dummy Supply AC Stator Coil Dummy Text Lorem Supply AC Stator Coil Dummy Text
                                Lorem. Supply AC Stator Coil Dummy
                            </div>
                            <br />
                            <div style={{ paddingTop: '10px', paddingBottom: '3px' }}>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="Product" size="small" />
                                    <Chip label="Product" size="small" />
                                    <Chip label="Agriculture" size="small" />
                                    <Chip label="Product" size="small" />
                                    <Chip label="Product" size="small" />
                                </Stack>
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderTopRightRadius: 10,
                            padding: '23px',
                        }}>
                        <div style={{ display: 'flex', gap: '20px' }}><p><b>Closing Date </b></p> 25 Feb 2023 </div>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '25px',
                            height: '213.5px',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderBottomRightRadius: 10,
                            height: '75.5%',
                        }}>
                        <Button className='card_btn' variant="contained"><p>Add to my deals</p></Button>
                        <Button className='card_btn' variant="outlined"><p>Check Details</p></Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '80% 20%', margin: '20px 100px', height: '300px' }}>
                <Box sx={{}}>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                borderTopLeftRadius: 10,
                                padding: '20px',
                            }}>
                            <p>1 Feb 2023</p>
                            <p id='space'><b>RFQ ID</b>   01098098</p>
                            <CheckCircleOutlineIcon variant='medium' />
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                borderBottomLeftRadius: 10,
                                padding: '20px',
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '850px' }}>
                                <div style={{ display: 'flex', gap: '2px' }}><p>Deal</p> <p>No:</p> <p>1429</p></div>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    <OfflineShareIcon />
                                    <Typography color='primary'>Share</Typography>
                                </div>
                            </div>
                            <br />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <h4>Spare Parts</h4>
                                <div id='live'>Live</div>
                            </div>
                            <br />
                            <div id='description'>
                                Supply AC Stator Coil Dummy Text Lorem Ipsem Dummy Supply AC Stator Coil Dummy Text Lorem Supply AC Stator Coil Dummy Text
                                Lorem. Supply AC Stator Coil Dummy
                            </div>
                            <br />
                            <div style={{ paddingTop: '10px', paddingBottom: '3px' }}>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="Product" size="small" />
                                    <Chip label="Product" size="small" />
                                    <Chip label="Agriculture" size="small" />
                                    <Chip label="Product" size="small" />
                                    <Chip label="Product" size="small" />
                                </Stack>
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderTopRightRadius: 10,
                            padding: '23px',
                        }}>
                        <div style={{ display: 'flex', gap: '20px' }}><p><b>Closing Date </b></p> 25 Feb 2023 </div>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '25px',
                            height: '213.5px',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderBottomRightRadius: 10,
                            height: '75.5%',
                        }}>
                        <Button className='card_btn' variant="contained"><p>Add to my deals</p></Button>
                        <Button className='card_btn' variant="outlined"><p>Check Details</p></Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default LandingPage

// export default function dash() {
//     return (
//         <h1>This is dashboard</h1>
//     )
// }
