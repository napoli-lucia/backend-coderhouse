const { Router } = require("express")

const router = Router();

const petsList = [];

// GET /api/pets/
router.get(`/`, (req, res) => {
    return res.json({
        ok: true,
        pets: petsList
    })
})

// GET /api/pets/:petId
router.get(`/:petId`, (req, res) => {
    return res.json({
        ok: true,
    });
});

// POST /api/pets/
router.post(`/`, (req, res) => {
    const newPet = req.body;
    console.log("🚀 ~ router.post ~ newPet:", newPet);
    const lastId = petsList.length > 0 ? petsList[petsList.length - 1].id + 1 : 1;
    petsList.push({ id: lastId, ...newPet });

    res.json({
        ok: true,
        message: `mascota agregada exitosamente`,
        pet: newPet,
    });
});

// PUT/api/pets/:petId
router.put(`/:petId`, (req, res) => { });

// DELETE /api/pets/:petId
router.delete(`/:petId`, (req, res) => { });

module.exports = router;

/*
{
    "ok": true,
    "pets": [
        {
            "id": 1,
            "name": "toby",
            "specie": "perro"
        },
        {
            "id": 2,
            "name": "lola",
            "specie": "perro"
        }
    ]
}
*/